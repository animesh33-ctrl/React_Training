import { memo } from "react";
import AdminSummaryCard from "./AdminSummaryCard";

const AdminSummary = ({ metrics }) => {
  const CARDS = [
    {
      label: "Total",
      value: metrics.total,
      bg: "bg-blue-500",
      border: "border-blue-500",
    },
    {
      label: "Open",
      value: metrics.open,
      bg: "bg-red-500",
      border: "border-red-500",
    },
    {
      label: "In Progress",
      value: metrics.inProgress,
      bg: "bg-yellow-500",
      border: "border-yellow-500",
    },
    {
      label: "Resolved",
      value: metrics.resolved,
      bg: "bg-green-500",
      border: "border-green-500",
    },
  ];
  //   console.log(metrics);
  return (
    <div className="w-[95vw] mb-6 ml-5 border-2 border-blue-400 bg-blue-200 rounded-xl p-7">
      <h1 className="font-semibold italic text-2xl">AdminSummary Panel</h1>
      <div className="flex gap-x-42 gap-y-4 flex-wrap w-full ml-5 mt-5">
        {CARDS.map((c) => {
          return (
            <AdminSummaryCard
              key={c.label}
              label={c.label}
              value={c.value}
              bg={c.bg}
              border={c.border}
            />
          );
        })}
      </div>
    </div>
  );
};

export default memo(AdminSummary);
