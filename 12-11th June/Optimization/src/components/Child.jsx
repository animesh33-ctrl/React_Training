import React from "react";
import "../App.css";

function Child({ count }) {
  return (
    <div className="allchild child">
      {console.log("Child render")}
      <p>Child: {count} </p>
    </div>
  );
}

export default React.memo(Child);
