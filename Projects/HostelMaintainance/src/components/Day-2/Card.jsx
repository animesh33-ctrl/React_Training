const Card = ({ request, getPriorityStyle, getStatusStyle }) => {
  // Deterministic color based on category instead of random
  const getCategoryColor = (category) => {
    const colorMap = {
      Electrical: "bg-yellow-500",
      Plumbing: "bg-blue-500",
      Cleaning: "bg-green-500",
      Furniture: "bg-orange-500",
      Internet: "bg-purple-500",
    };
    return colorMap[category] || "bg-gray-500";
  };

  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 bg-white/60">
      <div className="flex items-center">
        <div className={`w-2 h-20 ${getCategoryColor(request.category)}`}></div>

        <div className="px-4">
          <h3 className="text-xl font-bold text-gray-800">{request.title}</h3>

          <p className="text-gray-500">
            {request.category} • Room {request.roomNumber}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-64 pr-5">
        <span
          className={`px-4 py-2 rounded-full border text-sm font-medium text-center ${getPriorityStyle(
            request.priority,
          )}`}
        >
          {request.priority}
        </span>

        <span
          className={`px-4 py-2 rounded-full border text-sm font-medium text-center ${getStatusStyle(
            request.status,
          )}`}
        >
          {request.status}
        </span>
      </div>
    </div>
  );
};

export default Card;
