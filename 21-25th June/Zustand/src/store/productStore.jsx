import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products as initialProducts } from "../data/products";
const useProductStore = create(
  persist(
    (set, get) => ({
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
    }),
    { name: "Products" },
  ),
);

export const useWishList = create(
  persist(
    (set) => ({
      wishlist: [],
      addWistList: (product) =>
        set((state) => ({ wishlist: [...state.wishlist, product] })),
      removeWishList: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter((p) => p.id !== id),
        })),
    }),
    { name: "WishList" },
  ),
);

export default useProductStore;

export const useCart = create(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const isPresent = state.cart.find((p) => p.id === product.id);
          if (isPresent) {
            return {
              cart: state.cart.map((p) => {
                return p.id === product.id
                  ? { ...p, quantity: p.quantity + 1 }
                  : p;
              }),
            };
          } else {
            return { cart: [...state.cart, product] };
          }
        }),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((p) => p.id !== id),
        })),
      changeQuantity: (id, quantity) =>
        set((state) => ({
          cart: state.cart.map((p) => {
            if (p.id === id) {
              return {
                ...p,
                quantity: p.quantity + quantity,
              };
            } else {
              return p;
            }
          }),
        })),
    }),
    { name: "Cart" },
  ),
);
