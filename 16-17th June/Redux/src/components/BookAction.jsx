const purchase_book = () => {
  return {
    type: "BUY_BOOK",
    payload: 10,
  };
};

export const sell_book = (num) => {
  return {
    type: "SELL_BOOK",
    payload: Number(num.current.value),
  };
};

export default purchase_book;
