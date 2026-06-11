import React from "react";

function BookList({ books, markAsFavorite }) {
  console.log("BookList Rendered");

  return (
    <div>
      <h2>Book List</h2>

      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book}

            <button onClick={() => markAsFavorite(book)}>
              Add to Favorite
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default React.memo(BookList);
