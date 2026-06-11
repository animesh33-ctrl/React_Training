import React from "react";

const Destructuring2 = ({ name, skill, isLoggedIn, passoutYear }) => {
  console.log(isLoggedIn);

  return (
    <div>
      <h4>{isLoggedIn ? "Welcome Man" : "Go Home!!"}</h4>
      <h4>
        Employee Name is {name} having the skill {skill} passed out college in{" "}
        {passoutYear}
      </h4>
    </div>
  );
};

export default Destructuring2;
