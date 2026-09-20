import { describe, expect, it } from "vitest";
import { STACK_ITEMS } from "@/lib/data";
import { TECHNOLOGIES } from "@/lib/technologies";

describe("technology logo registry", () => {
  it("uses the Zustand logo configured in portfolio data", () => {
    const configuredLogo = STACK_ITEMS.find(
      (item) => item.name === "Zustand",
    )?.icon;

    expect(configuredLogo).toBeDefined();
    expect(TECHNOLOGIES.Zustand.logoSrc).toBe(configuredLogo);
  });

  it("maps the supplied local marks and makes monochrome SVGs theme-aware", () => {
    expect(TECHNOLOGIES["Framer Motion"]).toMatchObject({
      logoSrc: "/technologies/framer.svg",
      invertOnDark: true,
    });
    expect(TECHNOLOGIES.WebSocket).toMatchObject({
      logoSrc: "/technologies/websocket.svg",
      invertOnDark: true,
    });
    expect(TECHNOLOGIES.PTY).toMatchObject({
      logoSrc: "/technologies/terminal.svg",
      invertOnDark: true,
    });
  });
});
