import React from "react";

const Welcome = ({ name, remainingTasks }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 mt-6">
      <div className="bg-linear-to-r from-purple-100 to-purple-200 rounded-lg p-6 shadow-sm">
        <h4 className="text-2xl font-semibold text-purple-800">
          Welcome back, {name}!
        </h4>
        <p className="mt-2 text-gray-700">
          You have{" "}
          <span className="text-purple-600 font-semibold">
            {remainingTasks}
          </span>{" "}
          tasks remaining.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
