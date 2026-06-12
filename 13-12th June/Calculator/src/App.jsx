import React, { createContext, useState } from "react";
import Buttons from "./components/Buttons";
import Display from "./components/Display";

const ValueContext = createContext();

const App = () => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  const [expr, setExpr] = useState("");

  const handleButtonClick = (item) => {
    if (item === "C") {
      setExpr("");
    } else if (item === "=") {
      setExpr(eval(expr));
    } else {
      setExpr((prev) => prev + item);
    }
  };

  return (
    <div className="grid place-items-center bg-[rgb(35,39,47)] min-h-screen min-w-screen">
      <h1 className="font-bold text-7xl font-mono text-indigo-400">
        Calculator
      </h1>
      <ValueContext.Provider value={{ expr }}>
        <div className=" rounded-xl space-y-5 p-6 -mt-80 bg-white/10">
          <div className=" rounded-lg p-3 text-gray-400 hover:border-blue-400 focus-within:border-blue-400 bg-white/30">
            <Display />
          </div>
          <div className="flex flex-wrap p-3  w-[16rem] min-h-[35%] rounded-lg bg-white/20">
            <Buttons buttons={buttons} handleButtonClick={handleButtonClick} />
          </div>
        </div>
      </ValueContext.Provider>
    </div>
  );
};

export default App;
export { ValueContext };
