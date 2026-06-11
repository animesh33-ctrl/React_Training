import React, { useContext } from "react";
import "../index.css";
import { ThemeContext } from "../App";

export default function Child2() {
  const theme = useContext(ThemeContext);

  return (
    <div
      className={`allchild child2  ${theme ? "light-theme" : "dark-theme"} `}
    >
      <h3>I am the Child2 component</h3>
      <p>Theme in Child2: {theme ? "Light" : "Dark"}</p>
    </div>
  );
}
