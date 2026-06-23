import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import SummaryCards from "../components/SummaryCards";
import FilterBar from "../components/FilterBar";

describe("SummaryCards", () => {
  it("renders counts passed via props", () => {
    render(<SummaryCards total={4} going={1} notGoing={1} pending={2} />);

    expect(screen.getByTestId("summary-total")).toHaveTextContent("4");
    expect(screen.getByTestId("summary-going")).toHaveTextContent("1");
    expect(screen.getByTestId("summary-not-going")).toHaveTextContent("1");
    expect(screen.getByTestId("summary-pending")).toHaveTextContent("2");
  });
});

describe("FilterBar", () => {
  it("marks the active filter button as pressed(Going)", () => {
    render(<FilterBar activeFilter="Going" onFilterChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Going" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("marks the active filter button as pressed(Pending)", () => {
    render(<FilterBar activeFilter="Pending" onFilterChange={() => {}} />);
    expect(screen.getByRole("button", { name: "Pending" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByRole("button", { name: "All" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });

  it("calls onFilterChange with the clicked filter", async () => {
    const onFilterChange = vi.fn();
    render(<FilterBar activeFilter="All" onFilterChange={onFilterChange} />);

    await userEvent.click(screen.getByRole("button", { name: "Not Going" }));
    expect(onFilterChange).toHaveBeenCalledWith("Not Going");
  });
});
