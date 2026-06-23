import { memo } from "react";

const AdminSummaryCard = ({ label, value, bg, border }) => {
  // map old Tailwind class names to hex
  const colorMap = {
    "bg-blue-500": "#3B82F6",
    "bg-red-500": "#EF4444",
    "bg-yellow-500": "#EAB308",
    "bg-green-500": "#22C55E",
  };
  const accent = colorMap[bg] || "#64748B";

  return (
    <div
      className="rounded-xl flex overflow-hidden"
      style={{
        background: "#1E293B",
        border: `1px solid ${accent}44`,
        minWidth: "160px",
        boxShadow: `0 0 16px ${accent}10`,
      }}
    >
      <div style={{ width: "3px", background: accent, flexShrink: 0 }} />
      <div className="p-4 flex flex-col justify-center">
        <h5 className="text-xs uppercase tracking-wider font-semibold" style={{ color: "#64748B" }}>
          {label}
        </h5>
        <p
          className="text-3xl font-black mt-1"
          style={{ color: accent, fontFamily: "JetBrains Mono, monospace" }}
        >
          {value}
        </p>
      </div>
    </div>
  );
};

export default memo(AdminSummaryCard);
