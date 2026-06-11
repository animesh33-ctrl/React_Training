import React, { useState } from "react";

import MarksList from "./MarksList";
import TotalMarks from "./TotalMarks";
import ThemeChanger from "./ThemeChanger";

function StudentResult() {
  const [marks,setMarks] = useState([78, 85, 92, 88, 76]);

  const [themeCount, setThemeCount] = useState(0);

  const handleThemeChange = () => {
    setThemeCount(themeCount + 1);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Result Portal</h2>

      <MarksList marks={marks} />

      <TotalMarks marks={marks} />

      <ThemeChanger count={themeCount} onChangeTheme={handleThemeChange} />
    </div>
  );
}

export default StudentResult;
