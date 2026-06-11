import React from "react";
import "./App.css";
export default function FilterNames() {
  const [data, setData] = React.useState("Hello from App component");
  const [names, setNames] = React.useState(["Alice", "Bob", "Charlie"]);
  const [search, setSearch] = React.useState("");

  const filternames = names.filter((n) =>
    n.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="allchild app">
      {console.log(filternames)}
      <input
        type="text"
        placeholder="Search names..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filternames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
