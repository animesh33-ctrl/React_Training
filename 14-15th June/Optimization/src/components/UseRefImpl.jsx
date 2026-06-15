import React from "react";
import "../index.css";
const UseRefImpl = () => {
  const bgColor = React.useRef();
  const [color, setColor] = React.useState("");
  const handleClick = (event) => {
    event.preventDefault();
    console.log(bgColor.current.value);
    setColor(bgColor.current.value);
  };

  return (
    <div className="box">
      <input
        type="text"
        placeholder="Enter BackGround Color"
        ref={bgColor}
        className="bgBox"
      />

      <input
        type="text"
        placeholder="Enter anything"
        className="bgBox"
        style={{ backgroundColor: color }}
      />

      <br />
      <button className="bgBox" onClick={handleClick}>
        Change Background
      </button>
    </div>
  );
};

export default UseRefImpl;
