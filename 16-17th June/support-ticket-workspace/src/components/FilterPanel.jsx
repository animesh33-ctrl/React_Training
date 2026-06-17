import { useDispatch, useSelector } from "react-redux";
import { selectActiveFilter, setFilter } from "../features/ticketsSlice";
import { FILTERS } from "../lib/ticketMeta";

export default function FilterPanel() {
  const dispatch = useDispatch();
  const activeFilter = useSelector(selectActiveFilter);

  return (
    <div
      className="flex flex-wrap items-center gap-2 px-6 py-4"
      role="group"
      aria-label="Filter tickets by status"
    >
      <span className="mr-1 text-xs uppercase tracking-wider text-ink-4">
        Filter
      </span>
      {FILTERS.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => dispatch(setFilter(filter))}
            aria-pressed={isActive}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "border-ink bg-ink text-paper"
                : "border-slate-line bg-transparent text-ink-2 hover:border-ink-3 hover:text-ink"
            } cursor-pointer`}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}
