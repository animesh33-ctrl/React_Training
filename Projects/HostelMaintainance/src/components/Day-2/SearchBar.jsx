import { memo, useContext } from "react";
import { RequestContext } from "./store/RequestContextObject";

const SearchBar = memo(() => {
  const { updateFilter } = useContext(RequestContext);

  const categories = [
    { id: 1, name: "Electrical" },
    { id: 2, name: "Plumbing" },
    { id: 3, name: "Cleaning" },
    { id: 4, name: "Furniture" },
    { id: 5, name: "Internet" },
  ];

  const statuses = ["Open", "In Progress", "Resolved"];
  const PRIORITIES = ["Low", "Medium", "High"];

  return (
    <div
      className="p-3 m-3 border border-gray-400 rounded-2xl grid grid-cols-3 
      gap-x-2 max-w-[90%] items-center bg-white/20 backdrop-blur-3xl"
    >
      <h3 className="text-lg font-semibold col-span-3 mb-3">
        Search & Filters
      </h3>

      <div className="flex flex-col gap-1">
        <label htmlFor="searchByTitle">Search By Title</label>
        <input
          type="text"
          id="searchByTitle"
          placeholder="Search by title..."
          onChange={(e) => updateFilter("title", e.target.value)}
          className="max-w-[75%] border border-gray-600 rounded-md p-1 outline-none 
            focus:border-2 focus:border-blue-500"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="filterByCategory">Filter By Category</label>
        <select
          id="filterByCategory"
          onChange={(e) => updateFilter("category", e.target.value)}
          className="border border-gray-600 rounded-md p-1 outline-none max-w-[75%] focus:border-2 focus:border-blue-500"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          onChange={(e) => updateFilter("status", e.target.value)}
          className="border border-gray-600 rounded-md p-1 outline-none max-w-[75%] focus:border-2 focus:border-blue-500"
        >
          <option value="">All Statuses</option>
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          onChange={(e) => updateFilter("priority", e.target.value)}
          className="border border-gray-600 rounded-md p-1 outline-none max-w-[75%] focus:border-2 focus:border-blue-500"
        >
          <option value="">Select Priority</option>
          {PRIORITIES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
});

export default SearchBar;
