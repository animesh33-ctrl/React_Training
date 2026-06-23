# Team Lunch RSVP Planner

React + Vite + Tailwind CSS app for tracking employee RSVPs to a team lunch.

## Stack
- React 19 + Vite
- Tailwind CSS v4
- lucide-react (icons)
- Vitest + React Testing Library (tests)

## Setup
```
npm install
npm run dev       # start dev server
npm run build     # production build
npm run test      # run test suite
```

## Structure
```
src/
  data/employees.js        sample data + event details
  components/
    EventDetails.jsx       event name / venue / time / day
    FilterBar.jsx           All / Going / Not Going / Pending filter
    SummaryCards.jsx        dynamic counts
    EmployeeList.jsx        table + empty state
    EmployeeRow.jsx         single row, Going/Not Going actions
  App.jsx                   state, filtering, reset logic
  __tests__/                17 tests: rendering, props, events,
                             filtering, empty state, summary counts
```

## Behavior
- Default status for all employees: `Pending`
- Clicking `Going` / `Not Going` updates that employee's status and live summary counts
- Filter bar narrows list by status; empty-state message shown if no matches
- `Reset All` sets every employee back to `Pending` and clears active filter
