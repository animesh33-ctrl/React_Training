import React from "react";

function MarksList({ marks }) {
  console.log("Marks List");
  return (
    <div>
      <h3>Subject Marks</h3>

      <ul>
        {marks.map((mark, index) => (
          <li key={index}>
            Subject {index + 1}: {mark}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(MarksList);
