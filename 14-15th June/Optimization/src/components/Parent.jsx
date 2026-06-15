import { useCallback, useState } from "react";
import Child from "./Child";
import { NavLink, Outlet } from "react-router-dom";

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
      {/* <Outlet /> */}
      <NavLink to="/lazy">
        <button>Lazy</button>
      </NavLink>
    </div>
  );
}
