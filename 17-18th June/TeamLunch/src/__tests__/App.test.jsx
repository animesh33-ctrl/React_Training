import { render, screen, within } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it } from "vitest"
import App from "../App"

function getRow(name) {
  return screen.getByText(name).closest("tr")
}

describe("App", () => {
  it("renders event details and the full employee list on initial load", () => {
    render(<App />)

    expect(screen.getByText("Team Lunch RSVP Planner")).toBeInTheDocument()
    expect(screen.getByText("Friday Team Lunch")).toBeInTheDocument()
    expect(screen.getByText("Green Bowl Cafe")).toBeInTheDocument()
    ;["Anu", "Rahul", "Sneha", "Kiran"].forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it("starts with correct default summary counts (all Pending)", () => {
    render(<App />)

    expect(screen.getByTestId("summary-total")).toHaveTextContent("4")
    expect(screen.getByTestId("summary-going")).toHaveTextContent("0")
    expect(screen.getByTestId("summary-not-going")).toHaveTextContent("0")
    expect(screen.getByTestId("summary-pending")).toHaveTextContent("4")
  })

  it("updates an employee's status and the summary counts when Going is clicked", async () => {
    render(<App />)

    const anuRow = getRow("Anu")
    await userEvent.click(within(anuRow).getByRole("button", { name: "Mark Anu as Going" }))

    expect(screen.getByTestId("status-badge-1")).toHaveTextContent("Going")
    expect(screen.getByTestId("summary-going")).toHaveTextContent("1")
    expect(screen.getByTestId("summary-pending")).toHaveTextContent("3")
  })

  it("updates status to Not Going and reflects it in counts", async () => {
    render(<App />)

    const rahulRow = getRow("Rahul")
    await userEvent.click(within(rahulRow).getByRole("button", { name: "Mark Rahul as Not Going" }))

    expect(screen.getByTestId("status-badge-2")).toHaveTextContent("Not Going")
    expect(screen.getByTestId("summary-not-going")).toHaveTextContent("1")
    expect(screen.getByTestId("summary-pending")).toHaveTextContent("3")
  })

  it("filters the employee list by status", async () => {
    render(<App />)

    await userEvent.click(getRow("Anu").querySelector("button"))
    const filterBar = screen.getByTestId("filter-bar")
    await userEvent.click(within(filterBar).getByRole("button", { name: "Going" }))

    expect(screen.getByText("Anu")).toBeInTheDocument()
    expect(screen.queryByText("Rahul")).not.toBeInTheDocument()
    expect(screen.queryByText("Sneha")).not.toBeInTheDocument()
  })

  it("shows the empty state when a filter matches no employees", async () => {
    render(<App />)

    const filterBar = screen.getByTestId("filter-bar")
    await userEvent.click(within(filterBar).getByRole("button", { name: "Going" }))

    expect(screen.getByTestId("empty-state")).toBeInTheDocument()
  })

  it("resets all employees back to Pending and clears the filter", async () => {
    render(<App />)

    await userEvent.click(within(getRow("Anu")).getByRole("button", { name: "Mark Anu as Going" }))
    await userEvent.click(within(getRow("Rahul")).getByRole("button", { name: "Mark Rahul as Not Going" }))
    await userEvent.click(screen.getByRole("button", { name: "Reset All" }))

    expect(screen.getByTestId("summary-pending")).toHaveTextContent("4")
    expect(screen.getByTestId("summary-going")).toHaveTextContent("0")
    expect(screen.getByTestId("summary-not-going")).toHaveTextContent("0")
    expect(screen.getByTestId("status-badge-1")).toHaveTextContent("Pending")
    expect(screen.getByTestId("status-badge-2")).toHaveTextContent("Pending")
  })
})
