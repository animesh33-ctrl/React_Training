import React, { useState } from "react";

const AddTask = ({ handleTaskData, onClose }) => {
  const [data, setData] = useState({
    id: "",
    title: "",
    dueDate: "",
    status: "",
    completed: false,
  });

  const handleData = (event) => {
    const { name, value } = event.target;

    // console.log(event); //SyntheticBaseEvent

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // console.log(event); //SyntheticBaseEvent

    handleTaskData(data);

    setData({
      id: "",
      title: "",
      dueDate: "",
      status: "",
      completed: false,
    });
  };

  return (
    <div className="max-w-2xl mx-auto px-6 mt-6 border-2 border-black/20 rounded-2xl  ">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-sm"
      >
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={data.title}
              onChange={handleData}
              className="mt-1 block w-full rounded-md border-2 border-gray-400 p-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="dueDate"
              className="block text-sm font-medium text-gray-700"
            >
              Date
            </label>
            <input
              type="date"
              name="dueDate"
              id="dueDate"
              value={data.dueDate}
              onChange={handleData}
              className="mt-1 block w-full rounded-md border-2 border-gray-400 p-2 outline-none focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Status
            </label>
            <select
              name="status"
              id="status"
              value={data.status}
              onChange={handleData}
              className="mt-1 block w-full rounded-md border-2 border-gray-400 p-2 outline-none focus:border-purple-500"
              required
            >
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="flex gap-3 justify-end mt-2">
            <button
              type="button"
              onClick={() => {
                if (onClose) onClose();
                else
                  setData({
                    id: "",
                    title: "",
                    dueDate: "",
                    status: "",
                    completed: false,
                  });
              }}
              className="px-4 py-2 rounded-md bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-purple-600 text-white"
            >
              Add Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
