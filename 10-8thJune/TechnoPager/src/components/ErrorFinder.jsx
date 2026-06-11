import { useState, useEffect } from "react";

const ErrorFinder = () => {
  const [count, setCount] = useState(0); // 1 --> "0" => 0
  const [isRunning, setIsRunning] = useState(false); // 2 --> "false" => false

  useEffect(() => {
    if (isRunning) {
      setInterval(() => {
        setCount(count + 1); // 4 --> bcz of "0"count value would be "0"+1="01",then "01"+"1"="011"
      }, 1000);
    } // 3  ---> no clean up fn
  }, [isRunning]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={() => setIsRunning(true)}>Start</button>

      <button onClick={() => setIsRunning(false)}>Stop</button>
    </div>
  );
};

export default ErrorFinder;
