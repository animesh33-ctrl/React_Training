# Customer Support Ticket Workspace

A React + Redux Toolkit app for support agents to triage, track, and resolve
customer tickets. Styled with Tailwind CSS v4.

## Stack

- React 19 + Vite
- Redux Toolkit + React Redux
- Tailwind CSS v4

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  app/
    store.js                # Redux store configuration
  features/
    tickets/
      ticketsSlice.js        # ticketsSlice: reducers + selectors
  data/
    initialTickets.js        # seed data for allTickets
  lib/
    ticketMeta.js             # status/priority color + label mappings
  components/
    SummaryHeader.jsx         # ticket counts (total/open/in progress/resolved/starred)
    FilterPanel.jsx            # status filter pills (All / Open / In Progress / Resolved)
    TicketList.jsx              # scrollable list, respects active filter
    TicketItem.jsx               # single ticket row: select + star toggle
    TicketDetailPanel.jsx         # full details of the selected ticket
    ActionPanel.jsx                # change status / change priority / star
  App.jsx                          # page layout (header, filters, list + detail panes)
  main.jsx                         # app entry, wraps App in <Provider>
```

## Redux shape

```js
{
  tickets: {
    allTickets: [ { id, customerName, issueTitle, description, status, priority, assignedTo, starred }, ... ],
    selectedTicketId: null,
    activeFilter: 'All'
  }
}
```

## Actions (ticketsSlice)

- `selectTicket(id)` — set the selected ticket (pass `null` to clear)
- `changeTicketStatus({ id, status })` — `'Open' | 'In Progress' | 'Resolved'`
- `changeTicketPriority({ id, priority })` — `'Low' | 'Medium' | 'High'`
- `toggleStarred(id)` — flips the starred flag
- `setFilter(filter)` — `'All' | 'Open' | 'In Progress' | 'Resolved'`

## Notes

- Below the `md` breakpoint, selecting a ticket opens the detail panel as a
  full-screen overlay with a "Back to list" control. At `md` and above, the
  list and detail panels sit side by side.
- All ticket counts in the summary header are derived from Redux state via
  the `selectTicketSummary` selector, so they stay in sync automatically.
