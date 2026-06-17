import React from "react";
function Counter() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <h1>Counter Component</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}

function CounterWithBGC({ cmp, bgColor }) {
  return <div style={{ backgroundColor: bgColor }}>{cmp}</div>;
}
export default function HOC() {
  return (
    <div>
      <CounterWithBGC cmp={<Counter />} bgColor="red" />
      <CounterWithBGC cmp={<Counter />} bgColor="green" />
      <CounterWithBGC cmp={<Counter />} bgColor="blue" />
    </div>
  );
}
