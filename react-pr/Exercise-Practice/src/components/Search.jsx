import { useState } from "react";

const Search = () => {
  const users = ["Animesh", "Aditya", "Sahil", "Diptynil"];
  const [query, setQuery] = useState("");

  const searchedValues =
    query === ""
      ? []
      : users.filter((user) =>
          user.toLowerCase().includes(query.toLowerCase()),
        );

  return (
    <div className="min-h-[40vh] min-w-[65vw] border-2 border-red-400 bg-white/40 rounded-2xl flex flex-col items-center">
      <h1>Search Component</h1>
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
      />
      {searchedValues.map((user) => (
        <div key={user}>
          <h4>{user}</h4>
        </div>
      ))}
    </div>
  );
};

export default Search;
