import { create } from "zustand";
import { products as initialProducts } from "../data/products";
const useProductStore = create((set, get) => ({
  products: initialProducts,
  addProducts: (newProduct) =>
    set((state) => ({ products: [...state.products, newProduct] })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter((p) => p.id !== id),
    })),
  getMaxId: () => {
    return Math.max(...get().products.map((p) => p.id), 0);
  },
}));

export default useProductStore;
