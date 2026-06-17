import { createSlice } from '@reduxjs/toolkit';
import initialTickets from '../data/initialTickets';

const initialState = {
  allTickets: initialTickets,
  selectedTicketId: null,
  activeFilter: 'All',
};

const ticketsSlice = createSlice({
  name: 'tickets',
  initialState,
  reducers: {
    // Set the currently selected ticket
    selectTicket: (state, action) => {
      state.selectedTicketId = action.payload;
    },

    // Update the status of a specific ticket
    changeTicketStatus: (state, action) => {
      const { id, status } = action.payload;
      const ticket = state.allTickets.find((t) => t.id === id);
      if (ticket) {
        ticket.status = status;
      }
    },

    // Update the priority of a specific ticket
    changeTicketPriority: (state, action) => {
      const { id, priority } = action.payload;
      const ticket = state.allTickets.find((t) => t.id === id);
      if (ticket) {
        ticket.priority = priority;
      }
    },

    // Toggle the starred flag of a specific ticket
    toggleStarred: (state, action) => {
      const id = action.payload;
      const ticket = state.allTickets.find((t) => t.id === id);
      if (ticket) {
        ticket.starred = !ticket.starred;
      }
    },

    // Store the active status filter
    setFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
  },
});

export const {
  selectTicket,
  changeTicketStatus,
  changeTicketPriority,
  toggleStarred,
  setFilter,
} = ticketsSlice.actions;

export default ticketsSlice.reducer;

// ---- Selectors ----

export const selectAllTickets = (state) => state.tickets.allTickets;
export const selectActiveFilter = (state) => state.tickets.activeFilter;
export const selectSelectedTicketId = (state) => state.tickets.selectedTicketId;

export const selectFilteredTickets = (state) => {
  const { allTickets, activeFilter } = state.tickets;
  if (activeFilter === 'All') return allTickets;
  return allTickets.filter((t) => t.status === activeFilter);
};

export const selectSelectedTicket = (state) => {
  const { allTickets, selectedTicketId } = state.tickets;
  return allTickets.find((t) => t.id === selectedTicketId) || null;
};

export const selectTicketSummary = (state) => {
  const tickets = state.tickets.allTickets;
  return {
    total: tickets.length,
    open: tickets.filter((t) => t.status === 'Open').length,
    inProgress: tickets.filter((t) => t.status === 'In Progress').length,
    resolved: tickets.filter((t) => t.status === 'Resolved').length,
    starred: tickets.filter((t) => t.starred).length,
  };
};
