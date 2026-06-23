import { memo } from "react";
import AdminSummaryCard from "./AdminSummaryCard";

const AdminSummary = ({ metrics }) => {
  const CARDS = [
    { label: "Total", value: metrics.total, bg: "bg-blue-500", border: "border-blue-500" },
    { label: "Open", value: metrics.open, bg: "bg-red-500", border: "border-red-500" },
    { label: "In Progress", value: metrics.inProgress, bg: "bg-yellow-500", border: "border-yellow-500" },
    { label: "Resolved", value: metrics.resolved, bg: "bg-green-500", border: "border-green-500" },
  ];

  return (
    <div
      className="mb-6 mx-3 p-6 rounded-xl"
      style={{ background: "#1E293B", border: "1px solid #334155" }}
    >
      <p className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#64748B" }}>
        Summary Panel
      </p>
      <div className="flex gap-4 flex-wrap">
        {CARDS.map((c) => (
          <AdminSummaryCard key={c.label} label={c.label} value={c.value} bg={c.bg} border={c.border} />
        ))}
      </div>
    </div>
  );
};

export default memo(AdminSummary);
