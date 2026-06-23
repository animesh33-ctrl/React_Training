import { Calendar, MapPin, Clock, CalendarDays } from "lucide-react";

function DetailItem({ icon, iconColor, label, value }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white ${iconColor}`}
      >
        {icon}
      </div>
      <div>
        <p className="text-xs font-medium tracking-wide text-slate-400">
          {label}
        </p>
        <p className="font-semibold text-slate-900">{value}</p>
      </div>
    </div>
  );
}

export default function EventDetails({ eventName, venue, time, day }) {
  return (
    <section
      data-testid="event-details"
      className="rounded-xl border border-indigo-100 bg-indigo-50/70 p-6"
    >
      <div className="mb-5 flex items-center gap-2">
        <Calendar className="h-5 w-5 text-blue-600" />
        <h2 className="text-lg font-bold text-blue-600">Event Details</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DetailItem
          icon={<Calendar className="h-5 w-5" />}
          iconColor="text-blue-600"
          label="EVENT NAME"
          value={eventName}
        />
        <DetailItem
          icon={<MapPin className="h-5 w-5" />}
          iconColor="text-purple-600"
          label="VENUE"
          value={venue}
        />
        <DetailItem
          icon={<Clock className="h-5 w-5" />}
          iconColor="text-emerald-600"
          label="TIME"
          value={time}
        />
        <DetailItem
          icon={<CalendarDays className="h-5 w-5" />}
          iconColor="text-amber-500"
          label="DAY"
          value={day}
        />
      </div>
    </section>
  );
}
