// Central mapping of ticket status/priority to the console-style color system.
// Keeping this in one place means every panel reads the same signal consistently.

export const STATUSES = ['Open', 'In Progress', 'Resolved'];
export const PRIORITIES = ['Low', 'Medium', 'High'];
export const FILTERS = ['All', 'Open', 'In Progress', 'Resolved'];

export const statusStyles = {
  Open: {
    dot: 'bg-signal-amber',
    rail: 'bg-signal-amber',
    badge: 'bg-signal-amber/15 text-signal-amber border-signal-amber/30',
  },
  'In Progress': {
    dot: 'bg-signal-blue',
    rail: 'bg-signal-blue',
    badge: 'bg-signal-blue/15 text-signal-blue border-signal-blue/30',
  },
  Resolved: {
    dot: 'bg-signal-teal',
    rail: 'bg-signal-teal',
    badge: 'bg-signal-teal/15 text-signal-teal border-signal-teal/30',
  },
};

export const priorityStyles = {
  Low: 'text-ink-3 border-slate-line',
  Medium: 'text-signal-amber border-signal-amber/40',
  High: 'text-signal-red border-signal-red/40',
};
