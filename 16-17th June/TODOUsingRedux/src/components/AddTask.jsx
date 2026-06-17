import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/todotask/TodoActions";
const AddTask = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "",
  });

  const handleInput = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const task = {
      id: Date.now(),
      ...formData,
      completed: false,
      createdAt: new Date().toLocaleDateString(),
      updatedAt: null,
    };

    dispatch(addTask(task));

    setFormData({
      title: "",
      description: "",
      priority: "",
    });
    closeModal();
  };

  return (
    <div className="max-w-md mx-auto mt-6 bg-white shadow-lg rounded-xl p-6">
      <form onSubmit={handleSubmit} className="space-y-4 text-black">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Add New Task
        </h2>

        <div>
          <label className="block mb-1 font-medium text-gray-700">Title</label>
          <input
            type="text"
            placeholder="Enter Task Title..."
            name="title"
            required
            value={formData.title}
            onChange={handleInput}
            className="w-full border border-gray-600 outline-none rounded-lg px-4 py-2 focus:outline-none  focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Description
          </label>
          <textarea
            placeholder="Enter Task Description..."
            name="description"
            required
            value={formData.description}
            onChange={handleInput}
            rows="4"
            className="w-full border border-gray-600 outline-none rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Priority
          </label>
          <select
            name="priority"
            required
            value={formData.priority}
            onChange={handleInput}
            className="w-full border border-gray-600 outline-none rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Add Task
        </button>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          onClick={closeModal}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddTask;
