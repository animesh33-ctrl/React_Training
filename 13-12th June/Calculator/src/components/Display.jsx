import React, { useContext } from "react";
import { ValueContext } from "../App";

const Display = () => {
  const { expr } = useContext(ValueContext);

  return (
    <>
      <input
        type="text"
        placeholder="Enter Expression"
        required
        className="w-full outline-none text-white appearance-none [appearance:textfield] 
        [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
        text-right placeholder:text-left 
        "
        readOnly
        value={expr}
      />
    </>
  );
};

export default Display;
