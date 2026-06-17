import initialTickets from "../data/initialTickets";
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  allTickets: initialTickets,
  selectedTicketId: null,
  activeFilter: "All",
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    selectTicket: (state, action) => {
      state.selectedTicketId = action.payload;
    },
    updateTicketStatus: (state, action) => {
      const {id,status} = action.payload;
      const ticket = state.allTickets.find((ticket) => ticket.id===id);        
      if (ticket) {
        ticket.status = status;
      }      
    },
    updatePriority:(state,action)=>{
      const {id,priority} = action.payload;
      const ticket = state.allTickets.find((ticket) => ticket.id===id);
      if(ticket){
        ticket.priority = priority;
      }
    },
    toggleStar:(state,action)=>{
      const ticket = state.allTickets.find(ticket => ticket.id===action.payload);
      if(ticket){
        ticket.starred = !ticket.starred
      }  
    },
    filterTicket:(state,action)=>{
      state.activeFilter=action.payload
    }
  },
});

export const {selectTicket,updateTicketStatus,updatePriority,toggleStar,filterTicket} = ticketSlice.actions;

export default ticketSlice.reducer;

export const totalTickets = (state) => state.allTickets.length;
export const open = (state) => state.allTickets.filter(ticket => ticket.status ==='Open').length
export const inProgress = (state) => state.allTickets.filter(ticket => ticket.status ==='In Progress').length
export const resolved = (state) => state.allTickets.filter(ticket => ticket.status ==='Resolved').length
export const starred = (state) => state.allTickets.filter(ticket => ticket.starred).length

export const showTicketList = (state) => {
  if (state.activeFilter === "All") {
    return state.allTickets;
  }

  return state.allTickets.filter(
    (ticket) => ticket.status === state.activeFilter
  );
};
export const selectedTicketNow = (state) => state.allTickets.find(ticket => ticket.id===state.selectedTicketId)
export const selectedTicketId = (state) => state.selectedTicketId;
export const activeFilter = (state) => state.activeFilter;