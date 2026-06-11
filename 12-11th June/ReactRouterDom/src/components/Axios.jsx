import React, { useEffect, useState } from "react";
import axios from "axios";

const Axios = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.post("http://localhost:3000/posts", {
        id: "3",
        title: "ABCD",
        views: 65468465,
      });

      console.log("Data Posted Successfully!!!");
      console.log(res.data);

      const response = await axios.get("http://localhost:3000/posts");

      setUser(response.data);
    };

    loadData();
  }, []);
  console.log(user);
  return <div>Axios</div>;
};

export default Axios;
