import { useEffect } from "react";
import api from "./api";

export default function App() {
  const fetchData = async () => {
    try {
      const resp = await api.get("/user/1");
      console.log("Response received ", resp);
      console.log("Response received ", resp.data);
    } catch (error) {
      console.error("Error occurred ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div></div>;
}
