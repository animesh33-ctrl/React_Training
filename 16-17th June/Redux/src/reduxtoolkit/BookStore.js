import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./BookSlice";
 
const BookStore = configureStore({
    reducer:{
        book:BookSlice
    }
})
 
export default BookStore;