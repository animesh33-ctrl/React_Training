import React from "react";

const RestaurantInfo = ({ item }) => {
  console.log("Resturant Info Re-Renders");
  console.log(item);
  return (
    <div>
      <h1>Name : {item.name}</h1>
      <p>Rating : {item.rating}</p>
      <p>Delivery Time:{item.deliveryTime}</p>
    </div>
  );
};

export default React.memo(RestaurantInfo);
