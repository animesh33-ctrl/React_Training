import React from "react";

const itemColor = (item) => {
  if (["*", "-", "+"].includes(item)) {
    return "text-2xl";
  }
  return "";
};

const Buttons = ({ buttons, handleButtonClick }) => {
  return (
    <>
      {buttons.map((item) => (
        <button
          key={item}
          onClick={() => handleButtonClick(item)}
          className={`px-3 py-2 m-3 border-2 border-gray-400 bg-white/60 rounded-lg h-12 w-12 cursor-pointer active:bg-white/90 hover:-translate-y-1
            ${itemColor(item)} text-center  flex justify-center items-center outline-none transition dduration-300`}
        >
          {item}
        </button>
      ))}
    </>
  );
};

export default Buttons;
