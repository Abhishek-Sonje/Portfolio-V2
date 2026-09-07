import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { SocialLinks } from "./social-links";

describe("social profile previews", () => {
  it("opens on hover, stays open over the card, and dismisses with Escape", async () => {
    const user = userEvent.setup();
    render(<SocialLinks />);
    await user.hover(
      screen.getByRole("button", { name: "GitHub profile preview" }),
    );
    const card = await screen.findByRole("dialog");
    expect(card).toHaveAccessibleName("Abhishek Sonje on GitHub");
    await user.hover(card);
    expect(
      within(card).getByRole("link", { name: "View GitHub profile" }),
    ).toHaveAttribute("href", "https://github.com/Abhishek-Sonje");
    await user.keyboard("{Escape}");
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
    );
  });

  it("supports click/tap and only shows one profile at a time", async () => {
    const user = userEvent.setup();
    render(<SocialLinks />);
    await user.click(screen.getByRole("button", { name: "X profile preview" }));
    expect(await screen.findByRole("dialog")).toHaveAccessibleName("Abhishek Sonje on X");
    await user.click(
      screen.getByRole("button", { name: "LinkedIn profile preview" }),
    );
    const card = await screen.findByRole("dialog", {
      name: "Abhishek Sonje on LinkedIn",
    });
    expect(screen.getAllByRole("dialog")).toHaveLength(1);
    expect(
      within(card).getByRole("link", { name: "View profile" }),
    ).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/abhishek-sonje-83a333209",
    );
  });

  it("opens from the keyboard and restores trigger focus after Escape", async () => {
    const user = userEvent.setup();
    render(<SocialLinks />);
    await user.tab();
    const trigger = screen.getByRole("button", {
      name: "GitHub profile preview",
    });
    expect(trigger).toHaveFocus();
    await user.keyboard("{Enter}");
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    await user.keyboard("{Escape}");
    await waitFor(() => expect(trigger).toHaveFocus());
  });
});
