import { useState } from "react";
import SearchBar from "./SearchBar";

export default function ProductCard() {
  const [searchTerm, setSearchTerm] = useState("");
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  function filterProducts(products, searchTerm) {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }
  return (
    <div
      style={{
        margin: "20px",
        backgroundColor: "lightgray",
        padding: "20px",
        height: "800px",
        width: "600px",
        border: "1px solid black",
      }}
    >
      <SearchBar onSearch={setSearchTerm} />
      {filterProducts(products, searchTerm).map((p) => (
        <div key={p.id}>
          <p>Name: {p.name}</p>
          <p>Price: ${p.price}</p>
        </div>
      ))}
    </div>
  );
}
