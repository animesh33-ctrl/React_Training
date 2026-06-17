import { useState } from "react";
import AddTask from "./AddTask";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className="bg-slate-900 text-white p-6 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Todo Manager</h1>

        <button
          onClick={handleClick}
          className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition cursor-pointer"
        >
          {isClicked ? "Close Form" : "Add Task"}
        </button>
      </div>

      {isClicked && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={handleClick}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md mx-4"
          >
            <AddTask closeModal={handleClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
