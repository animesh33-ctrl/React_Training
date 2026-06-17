import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import purchase_book, { sell_book } from "./BookAction";
import { useRef } from "react";

export default function BookContainer() {
  const numOfBooks = useSelector((state) => state.numOfBooks);
  const bookName = useSelector((state) => state.bookName);
  const d = useDispatch();
  const value = useRef();
  return (
    <div>
      <h1>Book Container : {bookName} </h1>
      <h2>Number of Books : {numOfBooks} </h2>
      <button onClick={() => d(purchase_book())}>Buy Book</button>
      <br />
      <input
        type="number"
        placeholder="Enter number of books to sell..."
        ref={value}
      />
      <br />
      <button
        onClick={() => {
          d(sell_book(value));
          value.current.value = "";
        }}
      >
        Sell Book
      </button>
    </div>
  );
}
