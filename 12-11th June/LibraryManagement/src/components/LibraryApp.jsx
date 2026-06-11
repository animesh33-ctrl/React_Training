import { useState, useCallback } from "react";
import BookList from "./BookList";

function LibraryApp() {
  const [books,setBooks] = useState([
    "React Basics",
    "JavaScript Essentials",
    "Node.js Intro",
  ]);

  const [favorites, setFavorites] = useState([]);
  const [titleColor, setTitleColor] = useState("black");

  const markAsFavorite = useCallback((bookName) => {
    setFavorites((prev) => {
      if (prev.includes(bookName)) {
        return prev;
      }
      return [...prev, bookName];
    });
  }, []);

  const changeTitleColor = () => {
    setTitleColor((prev) => (prev === "black" ? "blue" : "black"));
  };

  return (
    <div>
      <h1 style={{ color: titleColor }}>Library Management</h1>
      <p>Color : {titleColor}</p>

      <button onClick={changeTitleColor}>Change Title Color</button>

      <BookList books={books} markAsFavorite={markAsFavorite} />

      <h2>Favorite Books</h2>

      {favorites.length === 0 ? (
        <p>No favorite books selected.</p>
      ) : (
        <ul>
          {favorites.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LibraryApp;
