import React from "react";
import Parent from "./components/Parent";
import FuncWithoutUseMemo from "./components/FuncWithoutUseMemo";
import FuncWithUseMemo from "./components/FuncWithUseMemo";
import UseCallbackDemo from "./components/UseCallBackDemo";

export default function App() {
  return (
    <div>
      {/* <Parent /> */}
      {/* <FuncWithoutUseMemo /> */}
      {/* <FuncWithUseMemo /> */}
      <UseCallbackDemo />
    </div>
  );
}
