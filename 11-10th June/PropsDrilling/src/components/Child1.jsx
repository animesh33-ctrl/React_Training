import React from "react";
import "../index.css";
import Child2 from "./Child2";

export default function Child1() {
  return (
    <div
    // className={`allchild child1  ${theme ? "light-theme" : "dark-theme"} `}
    >
      {/* <Child2 data={data} /> */}
      <Child2 />
    </div>
  );
}
