import React from "react";
import ListComp from "./components/ListComp";
import ProductList from "./components/ProductList";
import { UserProfile } from "./components/UserProfile";
import ProductListUpdate from "./components/ProductListUpdate";
import { ToDoList } from "./components/ToDoList";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-400 grid place-items-center p-6">
      {/* <ProductList /> */}
      <UserProfile />
      {/* <ProductListUpdate /> */}
      {/* <ToDoList /> */}
    </div>
  );
};

export default App;
