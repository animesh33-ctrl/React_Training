import React, { useState } from "react";

const CounterFun = () => {
  const [val, setVal] = useState(0);

  const handleIncrement = () => setVal(val + 1);
  const handleDecrement = () => setVal(val - 1);

  return (
    <>
      <div>Counter value is : {val}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
};

export default CounterFun;
