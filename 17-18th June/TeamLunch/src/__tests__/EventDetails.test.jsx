import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import EventDetails from "../components/EventDetails"

describe("EventDetails", () => {
  it("renders all event details passed via props", () => {
    render(
      <EventDetails
        eventName="Friday Team Lunch"
        venue="Green Bowl Cafe"
        time="1:00 PM"
        day="Friday"
      />
    )

    expect(screen.getByText("Event Details")).toBeInTheDocument()
    expect(screen.getByText("Friday Team Lunch")).toBeInTheDocument()
    expect(screen.getByText("Green Bowl Cafe")).toBeInTheDocument()
    expect(screen.getByText("1:00 PM")).toBeInTheDocument()
    expect(screen.getByText("Friday")).toBeInTheDocument()
  })

  it("reflects different prop values correctly", () => {
    render(
      <EventDetails
        eventName="Monday Standup"
        venue="Conference Room A"
        time="10:00 AM"
        day="Monday"
      />
    )

    expect(screen.getByText("Monday Standup")).toBeInTheDocument()
    expect(screen.getByText("Conference Room A")).toBeInTheDocument()
    expect(screen.queryByText("Friday Team Lunch")).not.toBeInTheDocument()
  })
})
