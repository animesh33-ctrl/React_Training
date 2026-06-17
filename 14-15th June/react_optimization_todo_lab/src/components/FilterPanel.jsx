import { memo, useMemo } from "react";
import SelectFieldFilterPanel from "./SelectFieldFilterPanel";

function FilterPanel({ statusFilter, sortBy, onStatusChange, onSortChange }) {
  console.log("FilterPanel re-rendered");

  const STATUS_OPTIONS = useMemo(() => {
    return ["Open", "Assigned", "InProgress", "Resolved"];
  }, []);

  const SORT_OPTIONS = useMemo(() => {
    return ["Priority", "Date"];
  }, []);

  return (
    <div className="card">
      <h3>Filters</h3>

      {/* <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
      >
        <option value="">All Status</option>
        <option value="Open">Open</option>
        <option value="Assigned">Assigned</option>
        <option value="In Progress">In Progress</option>
        <option value="Resolved">Resolved</option> */}
      {/* </select> */}

      {/* {console.log("Status Filter")} */}
      <SelectFieldFilterPanel
        name="Status Filter"
        value={statusFilter}
        onChange={onStatusChange}
        options={STATUS_OPTIONS}
        placeholder="All Status"
      />

      {/* <select value={sortBy} onChange={(e) => onSortChange(e.target.value)}>
        {console.log("Sort By")}
        <option value="">Sort By</option>
        <option value="priority">Priority</option>
        <option value="date">Date</option>
        </select> */}

      {/* {console.log("Sort By Filter")} */}
      <SelectFieldFilterPanel
        name="Sort By Filter"
        value={sortBy}
        onChange={onSortChange}
        options={SORT_OPTIONS}
        placeholder="Sort By"
      />

      <div className="todo-box">
        <strong>TODO:</strong> Prevent unnecessary re-renders using proper
        memoization strategy.
      </div>
    </div>
  );
}

export default memo(FilterPanel);
