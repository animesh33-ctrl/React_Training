import Form from "./components/Form.jsx";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [data, setData] = useState([]);

  const handleData = (value) => {
    setData((prev) => {
      return [...prev, value];
    });
  };

  return (
    <>
      <Form handleData={handleData} />
    </>
  );
};

export default App;
