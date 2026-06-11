import React from "react";
import DummyChild from "./DummyChild";
import { useCallback } from "react";

export default function UseCallbackDemo() {
  const [add, setAdd] = React.useState(0);
  const [count, setCount] = React.useState(100);
  const somefunction = useCallback(() => {
    console.log("somefunction called");
  }, [add]);
  // const somefunction=()=>
  // {
  //     console.log("somefunction called")
  // }
  return (
    <div>
      <h1>UseCallbackDemo</h1>
      <DummyChild somefunction={somefunction} add={add} />
      <p>Add: {add}</p>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Count</button>
    </div>
  );
}
