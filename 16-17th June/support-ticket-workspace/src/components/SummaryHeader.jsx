import { useSelector } from "react-redux";
import { selectTicketSummary } from "../features/ticketsSlice";

const STATS = [
  { key: "total", label: "Total tickets", dot: "bg-ink-3" },
  { key: "open", label: "Open", dot: "bg-signal-amber" },
  { key: "inProgress", label: "In progress", dot: "bg-signal-blue" },
  { key: "resolved", label: "Resolved", dot: "bg-signal-teal" },
  { key: "starred", label: "Starred", dot: "bg-signal-gold" },
];

export default function SummaryHeader() {
  const summary = useSelector(selectTicketSummary);

  return (
    <div className="border-b border-ink-2 bg-ink">
      <div className="mx-auto flex max-w-350 flex-wrap items-stretch gap-6 px-6 py-4">
        {STATS.map((stat, i) => (
          <div key={stat.key} className="flex items-center gap-6">
            {i > 0 && (
              <span
                className="hidden h-8 w-px bg-ink-2 sm:block"
                aria-hidden="true"
              />
            )}
            <div className="flex items-center gap-3">
              <span
                className={`h-2 w-2 rounded-full ${stat.dot}`}
                aria-hidden="true"
              />
              <span className="font-mono text-2xl tabular-nums leading-none text-paper">
                {summary[stat.key]}
              </span>
              <span className="text-xs uppercase tracking-wider text-ink-4">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
