import {configureStore} from "@reduxjs/toolkit"
import ticketSlice from "./TicketSlice";

const ticketStore = configureStore({
    reducer:{
        ticket:ticketSlice
    }
})

export default ticketStore;