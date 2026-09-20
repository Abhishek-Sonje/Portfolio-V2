import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { InteractionSounds } from "./interaction-sounds";

const sound = vi.hoisted(() => ({
  enabled: true,
  play: vi.fn(),
}));

vi.mock("@/hooks/use-sound-preference", () => ({
  useSoundPreference: () => ({
    enabled: sound.enabled,
    setEnabled: vi.fn(),
  }),
}));

vi.mock("@/lib/interaction-sound", () => ({
  playInteractionClick: sound.play,
}));

describe("interaction sounds", () => {
  beforeEach(() => {
    sound.enabled = true;
    sound.play.mockReset();
  });

  it("plays only for enabled, meaningful controls", () => {
    render(
      <>
        <InteractionSounds />
        <a href="#projects">
          <span>Projects</span>
        </a>
        <button type="button">Contact</button>
        <details>
          <summary>Details</summary>
        </details>
        <button type="button" disabled>
          Disabled
        </button>
        <button type="button" data-sound="off">
          Custom sound
        </button>
        <div>Page surface</div>
      </>,
    );

    fireEvent.click(screen.getByText("Projects"));
    fireEvent.click(screen.getByRole("button", { name: "Contact" }));
    fireEvent.click(screen.getByText("Details"));
    fireEvent.click(screen.getByRole("button", { name: "Disabled" }));
    fireEvent.click(screen.getByRole("button", { name: "Custom sound" }));
    fireEvent.click(screen.getByText("Page surface"));

    expect(sound.play).toHaveBeenCalledTimes(3);
  });

  it("stays silent when the saved preference is off", () => {
    sound.enabled = false;
    render(
      <>
        <InteractionSounds />
        <button type="button">Contact</button>
      </>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Contact" }));

    expect(sound.play).not.toHaveBeenCalled();
  });
});
