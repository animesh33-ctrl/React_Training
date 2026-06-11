import React from "react";

export default function FuncWithoutUseMemo() {
  const [add, setAdd] = React.useState(0);
  const [minus, setMinus] = React.useState(100);

  const multiply = () => {
    console.log("Multiplication function called");
    return add * 10;
  };

  return (
    <div>
      <h1>UseMemoDemo</h1>
      <h2>Addition {add}</h2>
      <button onClick={() => setAdd(add + 1)}>+</button>
      <h2>Subtraction {minus}</h2>
      <button onClick={() => setMinus(minus - 1)}>-</button>
      <h2>Multiplication {multiply()}</h2>
    </div>
  );
}
