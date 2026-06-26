import { create } from "zustand";

const counterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decreament: () => set((state) => ({ count: state.count - 1 })),
}));

export default counterStore;
