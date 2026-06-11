import React from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Cards from "./components/Cards";
import { createContext } from "react";

export const TaskDataContext = createContext();

const App = () => {
  const [taskData, setTaskData] = React.useState([
    {
      id: 1,
      title: "Design homepage UI",
      dueDate: "2024-05-25",
      status: "Pending",
      completed: false,
    },
    {
      id: 2,
      title: "API integration",
      dueDate: "2024-05-28",
      status: "In Progress",
      completed: false,
    },
    {
      id: 3,
      title: "Setup project repository",
      dueDate: "2024-05-20",
      status: "Completed",
      completed: true,
    },
    {
      id: 4,
      title: "Write unit tests",
      dueDate: "2024-05-30",
      status: "Pending",
      completed: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = React.useState(false);

  const total = taskData.length;
  const completed = taskData.filter((t) => t.completed).length;
  const pending = taskData.filter((t) => t.status === "Pending").length;
  const inProgress = taskData.filter((t) => t.status === "In Progress").length;

  const taskFlowData = {
    userName: "Alex",
    stats: { total, pending, inProgress, completed },
    tasks: taskData,
  };

  const handleTaskData = (data) => {
    const nextId = taskData.length
      ? Math.max(...taskData.map((t) => t.id)) + 1
      : 1;

    const newTask = {
      ...data,
      id: nextId,
      completed: data.status === "Completed",
    };
    setTaskData((prev) => [...prev, newTask]);
    setShowAddTask(false);
  };

  const handleDelete = (id) => {
    setTaskData((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div>
      <Header onAddClick={() => setShowAddTask((prev) => !prev)} />
      <Welcome
        name={taskFlowData.userName}
        remainingTasks={taskFlowData.stats.total}
      />
      <TaskDataContext.Provider value={{ taskData, handleDelete }}>
        <Cards />
      </TaskDataContext.Provider>
      {showAddTask && (
        <AddTask
          handleTaskData={handleTaskData}
          onClose={() => setShowAddTask((prev) => !prev)}
        />
      )}
    </div>
  );
};

export default App;
