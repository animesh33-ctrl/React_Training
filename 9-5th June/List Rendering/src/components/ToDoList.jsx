import { useState } from "react";

export const ToDoList = () => {
  const [toDoItem, setToDoItem] = useState([
    { taskID: 1, taskName: "Learn React" },
    { taskID: 2, taskName: "Build React App" },
  ]);

  const [task, setTask] = useState({
    taskID: "",
    taskName: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const addTask = (e) => {
    e.preventDefault();

    if (!task.taskID || !task.taskName) {
      alert("All fields are required");
      return;
    }

    const duplicate = toDoItem.find(
      (item) => item.taskID === Number(task.taskID),
    );

    if (duplicate) {
      alert("Task ID already exists");
      return;
    }

    setToDoItem([
      ...toDoItem,
      {
        taskID: Number(task.taskID),
        taskName: task.taskName,
      },
    ]);

    setTask({
      taskID: "",
      taskName: "",
    });
  };

  const deleteTask = (id) => {
    setToDoItem(toDoItem.filter((item) => item.taskID !== id));

    if (editId === id) {
      setTask({
        taskID: "",
        taskName: "",
      });
      setIsEditing(false);
    }
  };

  const editTask = (item) => {
    setTask({
      taskID: item.taskID,
      taskName: item.taskName,
    });

    setEditId(item.taskID);
    setIsEditing(true);
  };

  const updateTask = (e) => {
    e.preventDefault();

    setToDoItem(
      toDoItem.map((item) =>
        item.taskID === editId
          ? {
              taskID: Number(task.taskID),
              taskName: task.taskName,
            }
          : item,
      ),
    );

    setTask({
      taskID: "",
      taskName: "",
    });

    setEditId(null);
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-slate-800 rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          To Do List
        </h1>

        <div className="grid grid-cols-4 bg-slate-700 text-white font-semibold rounded-lg p-3 mb-3">
          <p>ID</p>
          <p>Task</p>
          <p className="text-center">Edit</p>
          <p className="text-center">Delete</p>
        </div>

        <div className="space-y-3 mb-8">
          {toDoItem.map((item) => (
            <div
              key={item.taskID}
              className="grid grid-cols-4 bg-slate-700 rounded-lg p-3 items-center text-white"
            >
              <p>{item.taskID}</p>
              <p>{item.taskName}</p>

              <button
                onClick={() => editTask(item)}
                className="mx-auto px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg transition"
              >
                Edit
              </button>

              <button
                onClick={() => deleteTask(item.taskID)}
                className="mx-auto px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        <form
          onSubmit={isEditing ? updateTask : addTask}
          className="bg-slate-700 p-6 rounded-xl"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-white mb-2">Task ID</label>
              <input
                type="number"
                name="taskID"
                value={task.taskID}
                onChange={handleChange}
                placeholder="Enter ID"
                className="w-full p-3 rounded-lg bg-slate-600 text-white outline-none border border-slate-500 focus:border-blue-500"
                disabled={isEditing}
              />
            </div>

            <div>
              <label className="block text-white mb-2">Task Name</label>
              <input
                type="text"
                name="taskName"
                value={task.taskName}
                onChange={handleChange}
                placeholder="Enter task"
                className="w-full p-3 rounded-lg bg-slate-600 text-white outline-none border border-slate-500 focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full mt-5 py-3 rounded-lg font-semibold transition ${
              isEditing
                ? "bg-green-500 hover:bg-green-600"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            {isEditing ? "Update Task" : "Add Task"}
          </button>
        </form>
      </div>
    </div>
  );
};
