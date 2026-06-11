import React from "react";

const FoodOrderApp = ({
  count,
  handleCountIncrement,
  handleCountDecrement,
}) => {
  console.log("FoodOrder APP Rendered");

  return (
    <div>
      <h3>FoodOrderApp</h3>
      <h4>Selected Items:{count}</h4>
      <button onClick={handleCountIncrement}>+</button>
      <br />
      <br />
      <button onClick={handleCountDecrement}>-</button>
    </div>
  );
};

export default FoodOrderApp;
