import { useState } from "react";
import Child from "./Child";
export default function Parent() {
  const [messageFromChild, setMessageFromChild] = useState("");
  function ReceiveMessageFromChild(message) {
    setMessageFromChild(message);
  }
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "10px",
        height: "600px",
        width: "600px",
        backgroundColor: "lightblue",
      }}
    >
      <p>Message from child: {messageFromChild}</p>
      <Child onMessage={ReceiveMessageFromChild} />
    </div>
  );
}
