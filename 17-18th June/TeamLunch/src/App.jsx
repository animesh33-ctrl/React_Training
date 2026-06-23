import { useMemo, useState } from "react";
import { RotateCcw } from "lucide-react";
import EventDetails from "./components/EventDetails";
import FilterBar from "./components/FilterBar";
import SummaryCards from "./components/SummaryCards";
import EmployeeList from "./components/EmployeeList";
import { initialEmployees, eventDetails } from "./data/employees";

export default function App() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [filter, setFilter] = useState("All");

  function handleStatusChange(id, status) {
    setEmployees((prev) =>
      prev.map((employee) =>
        employee.id === id ? { ...employee, status } : employee,
      ),
    );
  }

  function handleReset() {
    setEmployees((prev) =>
      prev.map((employee) => ({ ...employee, status: "Pending" })),
    );
    setFilter("All");
  }

  const counts = useMemo(() => {
    return employees.reduce(
      (acc, employee) => {
        acc.total += 1;
        if (employee.status === "Going") acc.going += 1;
        if (employee.status === "Not Going") acc.notGoing += 1;
        if (employee.status === "Pending") acc.pending += 1;
        return acc;
      },
      { total: 0, going: 0, notGoing: 0, pending: 0 },
    );
  }, [employees]);

  const filteredEmployees = useMemo(() => {
    if (filter === "All") return employees;
    return employees.filter((employee) => employee.status === filter);
  }, [employees, filter]);

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-8 sm:px-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            Team Lunch RSVP Planner
          </h1>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
          >
            <RotateCcw className="h-4 w-4" />
            Reset All
          </button>
        </header>

        <EventDetails
          eventName={eventDetails.eventName}
          venue={eventDetails.venue}
          time={eventDetails.time}
          day={eventDetails.day}
        />

        <SummaryCards
          total={counts.total}
          going={counts.going}
          notGoing={counts.notGoing}
          pending={counts.pending}
        />

        <FilterBar activeFilter={filter} onFilterChange={setFilter} />

        <EmployeeList
          employees={filteredEmployees}
          onStatusChange={handleStatusChange}
        />
      </div>
    </div>
  );
}
