import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { CopyEmail } from "./copy-email";

describe("copy email", () => {
  it("copies the supplied address and announces success", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText },
    });
    render(<CopyEmail email="hello@example.com" />);
    fireEvent.click(screen.getByRole("button", { name: "Copy email" }));
    expect(await screen.findByText("Email copied")).toBeInTheDocument();
    expect(writeText).toHaveBeenCalledWith("hello@example.com");
  });

  it("shows a usable address when clipboard permission is denied", async () => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error("Denied")) },
    });
    render(<CopyEmail email="hello@example.com" />);
    fireEvent.click(screen.getByRole("button", { name: "Copy email" }));
    expect(await screen.findByRole("status")).toHaveTextContent(
      "Copy manually: hello@example.com",
    );
  });
});
