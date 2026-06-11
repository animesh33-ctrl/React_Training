import React, { createContext, useState } from "react";
import "./index.css";
import Child from "./components/Child";

const ThemeContext = createContext();

export default function App() {
  const [data, setData] = React.useState("Hello from App component");
  const [theme, setTheme] = useState(true);
  return (
    <ThemeContext.Provider value={theme}>
      <div className="allchild app">
        <button onClick={() => setTheme((prev) => !prev)}>Toggle</button>
        {/* <Child data={data} /> */}
        {/* <Child theme={theme} /> */}
        <Child />
      </div>
    </ThemeContext.Provider>
  );
}

export { ThemeContext };
