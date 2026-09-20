import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectMedia } from "./project-media";

const project = {
  title: "Archie CLI",
  image: "/projects/archie.webp",
  live: "https://archie.abhishekdev.tech",
  github: "https://github.com/Abhishek-Sonje/archie",
};

describe("project media", () => {
  beforeEach(() => {
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();
  });

  it("keeps projects without video as normal outbound previews", () => {
    render(<ProjectMedia project={project} />);

    expect(
      screen.getByRole("link", { name: "Explore Archie CLI" }),
    ).toHaveAttribute("href", "https://archie.abhishekdev.tech");
    expect(
      screen.queryByRole("button", { name: "Play Archie CLI demo" }),
    ).not.toBeInTheDocument();
  });

  it("opens a native video player when local video data is present", () => {
    render(
      <ProjectMedia
        project={{
          ...project,
          video: {
            kind: "file",
            src: "/projects/archie-demo.mp4",
          },
        }}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Play Archie CLI demo" }),
    );

    expect(HTMLDialogElement.prototype.showModal).toHaveBeenCalledTimes(1);
    expect(
      screen.getByLabelText("Archie CLI demo", { selector: "video" }),
    ).toHaveAttribute("src", "/projects/archie-demo.mp4");
  });

  it("renders an embed player for hosted video data", () => {
    render(
      <ProjectMedia
        project={{
          ...project,
          video: {
            kind: "embed",
            src: "https://www.youtube.com/embed/example",
          },
        }}
      />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Play Archie CLI demo" }),
    );

    expect(screen.getByTitle("Archie CLI demo")).toHaveAttribute(
      "src",
      "https://www.youtube.com/embed/example",
    );
  });
});
