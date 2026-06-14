const Card = ({ request, getPriorityStyle, getStatusStyle }) => {
  const getRandomColor = () => {
    const colors = [
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-purple-500",
      "bg-pink-500",
      "bg-indigo-500",
      "bg-orange-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  return (
    <div className="flex items-center justify-between border border-gray-300 rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="flex items-center">
        <div className={`w-2 h-20 ${getRandomColor()}`}></div>

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
