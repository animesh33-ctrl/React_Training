import React from "react";

const Header = ({ onAddClick }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-purple-100 rounded-md flex items-center justify-center text-purple-600 font-bold">
            TF
          </div>
          <h1 className="text-xl font-semibold text-purple-700">TaskFlow</h1>
        </div>

        <button
          onClick={onAddClick}
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md  hover:bg-purple-700 font-bold"
        >
          + Add Task
        </button>
      </div>
    </header>
  );
};

export default Header;
