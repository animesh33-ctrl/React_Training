import { useEffect, useState } from "react";

const UseEffectDemo2 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Run the UseEffect: ", count);
    console.log(window);

    return () => console.log("Clean Up: ", count);
  }, [count]);

  return (
    <div>
      <h1>UseEffectDemo2</h1>
      <h4>Count : {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseEffectDemo2;
