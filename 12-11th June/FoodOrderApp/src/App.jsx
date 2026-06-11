import React from "react";
import { useCallback } from "react";
import { useState } from "react";
import RestaurantInfo from "./components/RestaurantInfo";
import FoodOrderApp from "./components/FoodOrderApp";

const App = () => {
  const [itemsSelected, setItemsSelected] = useState(0);

  const handleCountIncrement = useCallback(
    () => setItemsSelected((c) => c + 1),
    [],
  );
  const handleCountDecrement = useCallback(
    () => setItemsSelected((c) => c - 1),
    [],
  );

  const resturants = [
    {
      name: "Spice Garden",
      rating: 4.5,
      deliveryTime: "25 mins",
    },
    {
      name: "Pizza Hub",
      rating: 4.2,
      deliveryTime: "30 mins",
    },
    {
      name: "Burger Point",
      rating: 4.0,
      deliveryTime: "20 mins",
    },
  ];

  return (
    <div className="min-h-screen grid place-items-center space-y-0">
      <h1>Online Food Order App - Restaurant Info Panel</h1>
      <div>
        {resturants.map((item, index) => {
          return <RestaurantInfo key={index} item={item} />;
        })}
      </div>
      <FoodOrderApp
        count={itemsSelected}
        handleCountIncrement={handleCountIncrement}
        handleCountDecrement={handleCountDecrement}
      />
    </div>
  );
};

export default App;
