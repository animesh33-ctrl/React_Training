const Card = ({ request, getPriorityStyle, getStatusStyle }) => {
  const getCategoryAccent = (category) => {
    const map = {
      Electrical: "#EAB308",
      Plumbing: "#3B82F6",
      Cleaning: "#22C55E",
      Furniture: "#F97316",
      Internet: "#8B5CF6",
    };
    return map[category] || "#64748B";
  };

  const accent = getCategoryAccent(request.category);

  return (
    <div
      className="flex items-center justify-between rounded-xl overflow-hidden transition-all duration-200"
      style={{
        background: "#1E293B",
        border: "1px solid #334155",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accent + "66";
        e.currentTarget.style.background = "#263449";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#334155";
        e.currentTarget.style.background = "#1E293B";
      }}
    >
      <div className="flex items-center">
        <div style={{ width: "3px", height: "64px", background: accent, flexShrink: 0 }} />
        <div className="px-4 py-3">
          <h3 className="font-bold text-base" style={{ color: "#F1F5F9" }}>
            {request.title}
          </h3>
          <p className="text-xs mt-0.5" style={{ color: "#64748B" }}>
            {request.category} ·{" "}
            <span style={{ fontFamily: "JetBrains Mono, monospace", color: "#94A3B8" }}>
              Room {request.roomNumber}
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 pr-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${getPriorityStyle(request.priority)}`}
        >
          {request.priority}
        </span>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(request.status)}`}
        >
          {request.status}
        </span>
      </div>
    </div>
  );
};

export default Card;
