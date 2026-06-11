import { MdDelete } from "react-icons/md";

const StatusBadge = ({ status }) => {
  const base = "px-3 py-1 rounded-lg text-sm font-medium";
  if (status === "Pending")
    return (
      <span className={`${base} bg-yellow-100 text-yellow-800`}>Pending</span>
    );
  if (status === "In Progress")
    return (
      <span className={`${base} bg-blue-100 text-blue-800`}>In Progress</span>
    );
  if (status === "Completed")
    return (
      <span className={`${base} bg-green-100 text-green-800`}>Completed</span>
    );
  return <span className={base}>{status}</span>;
};

const Card = ({ item, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-center justify-between font-mono">
      <div className="flex items-center gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <p className="text-sm text-gray-500">{item.dueDate}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <StatusBadge status={item.status} />

        <button
          onClick={() => onDelete(item.id)}
          className="p-2 rounded-md bg-red-200 text-red-600 hover:bg-red-100"
          aria-label="Delete"
        >
          <MdDelete className="inline text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default Card;
