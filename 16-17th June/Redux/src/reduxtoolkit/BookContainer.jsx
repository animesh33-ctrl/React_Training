import { useSelector, useDispatch } from "react-redux";
import { BuyBook, SellBook } from "./BookSlice";

export default function BookContainer() {
  const NoOfBooks = useSelector((state) => state.book.NoOfBooks);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of Books: {NoOfBooks}</h1>
      <button onClick={() => dispatch(BuyBook(5))}>Buy Book</button>
      <button onClick={() => dispatch(SellBook(5))}>Sell Book</button>
    </div>
  );
}
