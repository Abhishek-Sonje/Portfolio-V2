import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect, it } from "vitest";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";

it("opens and closes experience details with the keyboard", async () => {
  const user = userEvent.setup();
  render(
    <Accordion type="single" collapsible>
      <AccordionItem value="role">
        <AccordionTrigger>Engineering internship</AccordionTrigger>
        <AccordionContent>Shipped client projects</AccordionContent>
      </AccordionItem>
    </Accordion>,
  );
  const trigger = screen.getByRole("button", {
    name: "Engineering internship",
  });
  await user.tab();
  expect(trigger).toHaveFocus();
  await user.keyboard("{Enter}");
  expect(trigger).toHaveAttribute("aria-expanded", "true");
  expect(screen.getByText("Shipped client projects")).toBeVisible();
  await user.keyboard("{Enter}");
  expect(trigger).toHaveAttribute("aria-expanded", "false");
});
