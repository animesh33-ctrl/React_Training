import { memo, useContext } from "react";
import { RequestContext } from "./store/RequestContextObject";

const SearchBar = memo(() => {
  const { updateFilter } = useContext(RequestContext);

  const categories = [
    { id: 1, name: "Electrical" },
    { id: 2, name: "Plumbing" },
    { id: 3, name: "Cleaning" },
    { id: 4, name: "Furniture" },
    { id: 5, name: "Internet" },
  ];
  const statuses = ["Open", "In Progress", "Resolved"];
  const PRIORITIES = ["Low", "Medium", "High"];

  const controlStyle = {
    padding: "7px 12px",
    background: "#0F172A",
    border: "1px solid #334155",
    borderRadius: "8px",
    color: "#F1F5F9",
    fontSize: "0.82rem",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s",
  };

  const focusIn = (e) => (e.target.style.borderColor = "#F59E0B");
  const focusOut = (e) => (e.target.style.borderColor = "#334155");

  return (
    <div
      className="p-4 rounded-xl mb-4"
      style={{ background: "#0F172A", border: "1px solid #334155" }}
    >
      <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#64748B" }}>
        Filters
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-xs" style={{ color: "#64748B" }}>Search title</label>
          <input
            type="text"
            placeholder="Search…"
            onChange={(e) => updateFilter("title", e.target.value)}
            style={controlStyle}
            onFocus={focusIn}
            onBlur={focusOut}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs" style={{ color: "#64748B" }}>Category</label>
          <select
            onChange={(e) => updateFilter("category", e.target.value)}
            style={{ ...controlStyle, cursor: "pointer" }}
            onFocus={focusIn}
            onBlur={focusOut}
          >
            <option value="">All</option>
            {categories.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs" style={{ color: "#64748B" }}>Status</label>
          <select
            onChange={(e) => updateFilter("status", e.target.value)}
            style={{ ...controlStyle, cursor: "pointer" }}
            onFocus={focusIn}
            onBlur={focusOut}
          >
            <option value="">All</option>
            {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs" style={{ color: "#64748B" }}>Priority</label>
          <select
            onChange={(e) => updateFilter("priority", e.target.value)}
            style={{ ...controlStyle, cursor: "pointer" }}
            onFocus={focusIn}
            onBlur={focusOut}
          >
            <option value="">All</option>
            {PRIORITIES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
});

export default SearchBar;
