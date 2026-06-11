import React from "react";

function ThemeChanger({ count, onChangeTheme }) {
  return (
    <div>
      <button onClick={onChangeTheme}>
        Change Theme
      </button>

      <h4>Theme Change Count: {count}</h4>
    </div>
  );
}

export default ThemeChanger;