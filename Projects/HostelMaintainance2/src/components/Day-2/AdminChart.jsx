import { memo } from "react";
import { PieChart, Pie, Cell, Label, Legend, Tooltip, ResponsiveContainer } from "recharts";

const CenterLabel = ({ viewBox, total }) => {
  const { cx, cy } = viewBox;
  return (
    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
      <tspan fontSize="22" fontWeight="bold" fill="#F59E0B" x="34%" y="40%" dy="1.3em">
        Total: {total}
      </tspan>
    </text>
  );
};

const AdminChart = ({ categories }) => {
  const COLORS = ["#3B82F6", "#F59E0B", "#8B5CF6", "#22C55E", "#EF4444"];
  const total = categories.reduce((sum, c) => sum + c.value, 0);

  return (
    <div
      className="sm:min-w-[45vw] min-w-[98vw] p-5 rounded-xl mb-3"
      style={{ background: "#1E293B", border: "1px solid #334155" }}
    >
      <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#64748B" }}>
        Category Breakdown
      </p>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={categories}
            dataKey="value"
            nameKey="name"
            cx="40%"
            cy="50%"
            outerRadius={100}
            innerRadius={60}
          >
            {categories.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
            <Label
              content={(props) => <CenterLabel {...props} total={total} />}
              position="center"
            />
          </Pie>
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            formatter={(value, entry) => (
              <span style={{ color: "#94A3B8", fontSize: "0.8rem" }}>
                {value} — {entry.payload.value}
              </span>
            )}
          />
          <Tooltip
            contentStyle={{ background: "#1E293B", border: "1px solid #334155", borderRadius: "8px", color: "#F1F5F9" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default memo(AdminChart);
