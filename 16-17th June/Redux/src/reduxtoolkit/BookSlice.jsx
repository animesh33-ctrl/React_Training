import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
  name: "book",
  initialState: {
    BookName: "React Native",
    NoOfBooks: 200,
  },
  reducers: {
    BuyBook: (state, action) => {
      state.NoOfBooks -= action.payload;
    },
    SellBook: (state, action) => {
      state.NoOfBooks += action.payload;
    },
  },
});

export const { BuyBook, SellBook } = BookSlice.actions;
export default BookSlice.reducer;
