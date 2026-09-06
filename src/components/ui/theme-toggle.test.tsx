import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ThemeToggle } from "./theme-toggle";
import { TooltipProvider } from "./tooltip";

const theme = vi.hoisted(() => ({ resolvedTheme: "light", setTheme: vi.fn() }));
vi.mock("next-themes", () => ({ useTheme: () => theme }));

function renderToggle() {
  render(
    <TooltipProvider>
      <ThemeToggle />
    </TooltipProvider>,
  );
  return screen.getByRole("button", { name: "Toggle light and dark theme" });
}

describe("theme switching", () => {
  beforeEach(() => {
    theme.resolvedTheme = "light";
    theme.setTheme.mockReset();
    Object.defineProperty(document, "startViewTransition", {
      configurable: true,
      value: undefined,
    });
    Object.defineProperty(window, "matchMedia", {
      configurable: true,
      value: vi.fn(() => ({ matches: false })),
    });
  });

  it.each([
    ["light", "dark"],
    ["dark", "light"],
  ])(
    "switches from %s to %s without View Transition support",
    (current, next) => {
      theme.resolvedTheme = current;
      const button = renderToggle();
      fireEvent.click(button);
      expect(theme.setTheme).toHaveBeenLastCalledWith(next);
    },
  );

  it("skips the reveal when reduced motion is requested", () => {
    const transition = vi.fn();
    Object.defineProperty(document, "startViewTransition", {
      configurable: true,
      value: transition,
    });
    vi.mocked(window.matchMedia).mockReturnValue({
      matches: true,
    } as MediaQueryList);
    fireEvent.click(renderToggle());
    expect(transition).not.toHaveBeenCalled();
    expect(theme.setTheme).toHaveBeenCalledWith("dark");
  });

  it("reveals the new theme and ignores overlapping clicks", async () => {
    let finish!: () => void;
    const finished = new Promise<void>((resolve) => {
      finish = resolve;
    });
    const animate = vi.fn(() => ({ finished }));
    Object.defineProperty(document.documentElement, "animate", {
      configurable: true,
      value: animate,
    });
    const transition = vi.fn((update: () => void) => {
      update();
      return { ready: Promise.resolve() };
    });
    Object.defineProperty(document, "startViewTransition", {
      configurable: true,
      value: transition,
    });
    const button = renderToggle();
    fireEvent.click(button);
    fireEvent.click(button);
    expect(transition).toHaveBeenCalledTimes(1);
    await waitFor(() => expect(animate).toHaveBeenCalled());
    expect(animate.mock.calls[0]).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          pseudoElement: "::view-transition-new(root)",
        }),
      ]),
    );
    finish();
  });

  it("still changes theme if the transition is rejected", async () => {
    Object.defineProperty(document, "startViewTransition", {
      configurable: true,
      value: () => ({ ready: Promise.reject(new Error("Skipped")) }),
    });
    fireEvent.click(renderToggle());
    await waitFor(() => expect(theme.setTheme).toHaveBeenCalledWith("dark"));
  });
});
