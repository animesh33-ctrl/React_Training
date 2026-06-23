import { memo } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Label,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const CenterLabel = ({ viewBox, total }) => {
  const { cx, cy } = viewBox;
  return (
    <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
      <tspan
        fontSize="24"
        fontWeight="bold"
        fill="indigo"
        x="34%"
        y="40%"
        dy="1.3em"
        className="italic"
      >
        Total: {total}
      </tspan>
    </text>
  );
};
const AdminChart = ({ categories }) => {
  const COLORS = ["#4F46E5", "#F59E0B", "#8B5CF6", "#10B981", "#EF4444"];
  const total = categories.reduce((sum, c) => sum + c.value, 0);

  return (
    <div className="sm:min-w-[45vw] min-w-[98vw] pl-3 pr-3 border border-indigo-500 rounded-2xl mr-8 mb-3">
      <h4 className="font-semibold text-2xl italic pt-4">Admin Overview</h4>
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
            formatter={(value, entry) => `${value} - ${entry.payload.value}`}
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default memo(AdminChart);
