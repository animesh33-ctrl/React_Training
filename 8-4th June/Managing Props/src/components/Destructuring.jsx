import React from "react";

const Destructuring = ({ name, status, skill }) => {
  return (
    <div>
      <h4>
        Employee Name: {name} having the skill {skill} is {status}
      </h4>
    </div>
  );
};

export default Destructuring;
