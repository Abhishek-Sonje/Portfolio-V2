import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SocialLinks } from "./social-links";

describe("social profile previews", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          name: "Abhishek Sonje",
          login: "Abhishek-Sonje",
          publicRepos: 35,
          followers: 6,
          following: 12,
        }),
      }),
    );
  });

  it("opens a GitHub-style banner-free card on hover", async () => {
    const user = userEvent.setup();
    render(<SocialLinks />);
    await user.hover(screen.getByRole("link", { name: "Open GitHub profile" }));
    const card = await screen.findByRole("dialog");
    expect(card).toHaveAccessibleName("Abhishek Sonje on GitHub");
    expect(
      document.querySelector('img[src*="banner1"]'),
    ).not.toBeInTheDocument();
    expect(await within(card).findByText("public repositories")).toBeVisible();
    expect(within(card).getByText(/followers ·/)).toBeVisible();
  });

  it("keeps the popup read-only and dismisses it with Escape", async () => {
    const user = userEvent.setup();
    render(<SocialLinks />);
    await user.hover(screen.getByRole("link", { name: "Open GitHub profile" }));
    const card = await screen.findByRole("dialog");
    await user.hover(card);
    expect(within(card).queryByRole("link")).not.toBeInTheDocument();
    expect(within(card).queryByRole("button")).not.toBeInTheDocument();
    await user.keyboard("{Escape}");
    await waitFor(() =>
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument(),
    );
  });

  it("makes every icon the direct outbound profile link", () => {
    render(<SocialLinks />);
    expect(
      screen.getByRole("link", { name: "Open GitHub profile" }),
    ).toHaveAttribute("href", "https://github.com/Abhishek-Sonje");
    expect(
      screen.getByRole("link", { name: "Open LinkedIn profile" }),
    ).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/abhishek-sonje-83a333209",
    );
    expect(
      screen.getByRole("link", { name: "Open X profile" }),
    ).toHaveAttribute("href", "https://x.com/Abhi_SDev");
  });

  it("only shows one hover preview at a time", async () => {
    const user = userEvent.setup();
    render(<SocialLinks />);
    await user.hover(screen.getByRole("link", { name: "Open X profile" }));
    expect(await screen.findByRole("dialog")).toHaveAccessibleName(
      "Abhishek Sonje on X",
    );
    await user.hover(
      screen.getByRole("link", { name: "Open LinkedIn profile" }),
    );
    const card = await screen.findByRole("dialog", {
      name: "Abhishek Sonje on LinkedIn",
    });
    expect(screen.getAllByRole("dialog")).toHaveLength(1);
    expect(within(card).queryByText(/view profile/i)).not.toBeInTheDocument();
  });

  it("opens from keyboard focus while preserving link behavior", async () => {
    const user = userEvent.setup();
    render(<SocialLinks />);
    await user.tab();
    const trigger = screen.getByRole("link", {
      name: "Open GitHub profile",
    });
    expect(trigger).toHaveFocus();
    expect(await screen.findByRole("dialog")).toBeInTheDocument();
    expect(trigger).toHaveAttribute("target", "_blank");
    await user.keyboard("{Escape}");
    await waitFor(() => expect(trigger).toHaveFocus());
  });
});
