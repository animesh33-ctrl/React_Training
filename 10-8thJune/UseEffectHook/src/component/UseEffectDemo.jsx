import { useEffect, useState } from "react";

const UseEffectDemo = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    //clean up function   --> runs when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1>UseEffectDemo</h1>
      <h4>Time is : {time}</h4>
    </div>
  );
};

export default UseEffectDemo;
