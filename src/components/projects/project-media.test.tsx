import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { getYouTubeEmbedUrl, ProjectMedia } from "./project-media";

const project = {
  title: "Archie CLI",
  image: "/projects/archieImg.webp",
  live: "https://archie.abhishekdev.tech",
  github: "https://github.com/Abhishek-Sonje/archie",
};

describe("project media", () => {
  it("keeps projects without video as normal outbound previews", () => {
    render(<ProjectMedia project={project} />);

    expect(
      screen.getByRole("link", { name: "Explore Archie CLI" }),
    ).toHaveAttribute("href", "https://archie.abhishekdev.tech");
    expect(
      screen.queryByRole("button", { name: "Play Archie CLI demo" }),
    ).not.toBeInTheDocument();
  });

  it("clears pointer focus before opening an outbound project", () => {
    render(<ProjectMedia project={project} />);
    const link = screen.getByRole("link", { name: "Explore Archie CLI" });

    link.focus();
    expect(link).toHaveFocus();
    fireEvent.pointerUp(link, { pointerType: "mouse" });

    expect(link).not.toHaveFocus();
  });
  it("opens a compact player from a regular YouTube link", async () => {
    const user = userEvent.setup();
    render(
      <ProjectMedia
        project={{
          ...project,
          video: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
        }}
      />,
    );

    await user.click(
      screen.getByRole("button", { name: "Play Archie CLI demo" }),
    );

    expect(await screen.findByTitle("Archie CLI demo")).toHaveAttribute(
      "src",
      "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE?autoplay=1&playsinline=1&rel=0",
    );
    expect(screen.getByRole("button", { name: "Close video" })).toBeVisible();
  });

  it("supports short, Shorts, and timestamped YouTube links", () => {
    expect(
      getYouTubeEmbedUrl("https://youtu.be/M7lc1UVf-VE?t=1m30s"),
    ).toContain("/embed/M7lc1UVf-VE?");
    expect(
      getYouTubeEmbedUrl("https://youtu.be/M7lc1UVf-VE?t=1m30s"),
    ).toContain("start=90");
    expect(
      getYouTubeEmbedUrl("https://youtube.com/shorts/M7lc1UVf-VE"),
    ).toContain("/embed/M7lc1UVf-VE?");
  });

  it("does not show a play option for an invalid video URL", () => {
    render(
      <ProjectMedia project={{ ...project, video: "https://example.com" }} />,
    );

    expect(
      screen.queryByRole("button", { name: "Play Archie CLI demo" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Explore Archie CLI" }),
    ).toBeVisible();
  });
});
