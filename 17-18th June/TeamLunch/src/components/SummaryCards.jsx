import { Users, Check, X, Minus } from "lucide-react";

function Card({ testId, value, label, bg, border, iconBg, iconColor, icon }) {
  return (
    <div
      data-testid={testId}
      className={`flex items-center gap-4 rounded-xl border p-5 ${bg} ${border}`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full ${iconBg} ${iconColor}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-3xl font-bold text-slate-900">{value}</p>
        <p className="text-slate-500">{label}</p>
      </div>
    </div>
  );
}

export default function SummaryCards({ total, going, notGoing, pending }) {
  return (
    <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <Card
        testId="summary-total"
        value={total}
        label="Total Employees"
        bg="bg-violet-50"
        border="border-violet-100"
        iconBg="bg-violet-200"
        iconColor="text-violet-700"
        icon={<Users className="h-6 w-6" />}
      />
      <Card
        testId="summary-going"
        value={going}
        label="Going"
        bg="bg-emerald-50"
        border="border-emerald-100"
        iconBg="bg-emerald-500"
        iconColor="text-white"
        icon={<Check className="h-6 w-6" />}
      />
      <Card
        testId="summary-not-going"
        value={notGoing}
        label="Not Going"
        bg="bg-rose-50"
        border="border-rose-100"
        iconBg="bg-rose-500"
        iconColor="text-white"
        icon={<X className="h-6 w-6" />}
      />
      <Card
        testId="summary-pending"
        value={pending}
        label="Pending"
        bg="bg-amber-50"
        border="border-amber-100"
        iconBg="bg-amber-500"
        iconColor="text-white"
        icon={<Minus className="h-6 w-6" />}
      />
    </section>
  );
}
