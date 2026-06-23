const FILTERS = ["All", "Going", "Not Going", "Pending"];

export default function FilterBar({ activeFilter, onFilterChange }) {
  return (
    <section
      data-testid="filter-bar"
      className="flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-white p-5"
    >
      <span className="font-bold text-slate-900 italic text-2xl">
        Filter by Status:
      </span>
      {FILTERS.map((filter) => {
        const isActive = activeFilter === filter;
        return (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            aria-pressed={isActive}
            className={`rounded-lg border px-4 py-2 text-sm font-medium transition-colors ${
              isActive
                ? "bg-indigo-600 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            }`}
          >
            {filter}
          </button>
        );
      })}
    </section>
  );
}
