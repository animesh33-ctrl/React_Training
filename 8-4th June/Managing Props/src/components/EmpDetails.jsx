import React from "react";

export const EmpDetails = ({ name = "Emp Name", status = "Not Available" }) => {
  return (
    <div>
      {/* <h2>Employee Details</h2> */}
      <br />
      <h4>
        Employee Name: {name} , is {status}
      </h4>
    </div>
  );
};
