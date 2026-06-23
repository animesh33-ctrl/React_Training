import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import EmployeeRow from "../components/EmployeeRow"

const employee = { id: 1, name: "Anu", team: "UI", status: "Pending" }

describe("EmployeeRow", () => {
  it("displays employee name, team, and status from props", () => {
    render(
      <table>
        <tbody>
          <EmployeeRow employee={employee} index={0} onStatusChange={() => {}} />
        </tbody>
      </table>
    )

    expect(screen.getByText("Anu")).toBeInTheDocument()
    expect(screen.getByText("UI")).toBeInTheDocument()
    expect(screen.getByText("Pending")).toBeInTheDocument()
  })

  it("calls onStatusChange with id and 'Going' when Going is clicked", async () => {
    const onStatusChange = vi.fn()
    render(
      <table>
        <tbody>
          <EmployeeRow employee={employee} index={0} onStatusChange={onStatusChange} />
        </tbody>
      </table>
    )

    await userEvent.click(screen.getByRole("button", { name: /mark anu as going/i }))
    expect(onStatusChange).toHaveBeenCalledWith(1, "Going")
  })

  it("calls onStatusChange with id and 'Not Going' when Not Going is clicked", async () => {
    const onStatusChange = vi.fn()
    render(
      <table>
        <tbody>
          <EmployeeRow employee={employee} index={0} onStatusChange={onStatusChange} />
        </tbody>
      </table>
    )

    await userEvent.click(screen.getByRole("button", { name: /mark anu as not going/i }))
    expect(onStatusChange).toHaveBeenCalledWith(1, "Not Going")
  })
})
