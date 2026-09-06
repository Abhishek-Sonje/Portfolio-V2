import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ThemeToggle } from "./theme-toggle";
import { TooltipProvider } from "./tooltip";
import { SoundToggle } from "./sound-toggle";
import { playThemeDrop } from "@/lib/theme-sound";

const theme = vi.hoisted(() => ({ resolvedTheme: "light", setTheme: vi.fn() }));
vi.mock("next-themes", () => ({ useTheme: () => theme }));
vi.mock("@/lib/theme-sound", () => ({ playThemeDrop: vi.fn() }));

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
    localStorage.clear();
    vi.mocked(playThemeDrop).mockClear();
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

  it("plays a droplet only on interaction and remembers mute", () => {
    render(
      <TooltipProvider>
        <ThemeToggle />
        <SoundToggle />
      </TooltipProvider>,
    );
    const toggle = screen.getByRole("button", {
      name: "Toggle light and dark theme",
    });
    const sound = screen.getByRole("button", { name: "Theme sounds" });
    expect(playThemeDrop).not.toHaveBeenCalled();
    fireEvent.click(toggle);
    expect(playThemeDrop).toHaveBeenCalledTimes(1);
    fireEvent.click(sound);
    expect(sound).toHaveAttribute("aria-pressed", "false");
    expect(localStorage.getItem("portfolio-theme-sound")).toBe("off");
    fireEvent.click(toggle);
    expect(playThemeDrop).toHaveBeenCalledTimes(1);
  });

  it("honors a saved mute preference on load", () => {
    localStorage.setItem("portfolio-theme-sound", "off");
    fireEvent.click(renderToggle());
    expect(playThemeDrop).not.toHaveBeenCalled();
    expect(theme.setTheme).toHaveBeenCalledWith("dark");
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
