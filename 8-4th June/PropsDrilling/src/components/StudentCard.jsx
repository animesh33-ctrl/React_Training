import React from "react";

const StudentCard = (props) => {
  let msg = null;
  if (props.college === "IEM") {
    msg = <p>Best Wishes to IEM students</p>;
  } else if (props.college === "UEM") {
    msg = <p>Best Wishes to UEM Students</p>;
  }

  if (props.selected) {
    return (
      <>
        <h2>{props.studentName}</h2>
        <p>
          {" "}
          {props.isTopper && <span>Many Congratulations </span>}
          You are Welcome to {props.orgName}
        </p>
        {msg}
      </>
    );
  }
  return (
    <>
      <h2>{props.studentName}</h2>
      <p>Go Home and Study Well</p>
    </>
  );
};

export default StudentCard;
