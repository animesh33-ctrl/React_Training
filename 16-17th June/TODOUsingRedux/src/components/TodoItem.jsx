import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/todotask/TodoActions";

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTask(item.id));
  };
  return (
    <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-xl transition">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>

          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>

        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold
      ${
        item.priority === "High"
          ? "bg-red-100 text-red-700"
          : item.priority === "Medium"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-green-100 text-green-700"
      }`}
        >
          {item.priority}
        </span>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <span className="text-sm text-gray-500">Created: {item.createdAt}</span>

        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
