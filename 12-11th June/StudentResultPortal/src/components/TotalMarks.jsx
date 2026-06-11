import React, { useMemo } from "react";

function TotalMarks({ marks }) {
  const total = useMemo(() => {
    console.log("Calculating total...");
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return sum;
  }, [marks]);

  return (
    <div>
      <h3>Total Marks: {total}</h3>
    </div>
  );
}

export default React.memo(TotalMarks);
