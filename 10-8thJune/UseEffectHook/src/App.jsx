import React from "react";
import CounterFun from "./component/CounterFun";
import UseEffectDemo from "./component/UseEffectDemo";
import UseEffectDemo2 from "./component/UseEffectDemo2";
import WindowResizeTracker from "./component/WindowResizeTracker";

const App = () => {
  return (
    <div className="grid place-items-center min-h-screen">
      {/* <CounterFun /> */}
      {/* <UseEffectDemo /> */}
      {/* <UseEffectDemo2 /> */}
      <WindowResizeTracker />
    </div>
  );
};

export default App;
