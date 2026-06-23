import { render, screen } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import EmployeeList from "../components/EmployeeList"

const employees = [
  { id: 1, name: "Anu", team: "UI", status: "Going" },
  { id: 2, name: "Rahul", team: "Backend", status: "Not Going" },
]

describe("EmployeeList", () => {
  it("renders a row for every employee passed via props", () => {
    render(<EmployeeList employees={employees} onStatusChange={() => {}} />)

    expect(screen.getByText("Anu")).toBeInTheDocument()
    expect(screen.getByText("Rahul")).toBeInTheDocument()
    expect(screen.getByText("Backend")).toBeInTheDocument()
  })

  it("shows an empty state message when no employees match the filter", () => {
    render(<EmployeeList employees={[]} onStatusChange={vi.fn()} />)

    expect(screen.getByTestId("empty-state")).toBeInTheDocument()
    expect(screen.getByText(/no employees match this filter/i)).toBeInTheDocument()
  })
})
