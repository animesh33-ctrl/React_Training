import { create } from "zustand";
import { persist } from "zustand/middleware";

const counterLogic = (set) => ({
  count: 0,
  increment: async () => {
    const promise = new Promise((resolve, reject) =>
      setTimeout(() => {
        let error = false;
        if (!error) resolve("animesh");
        else reject("error");
      }, 1000),
    );
    await promise
      .then((u) => {
        console.log(u);
      })
      .catch((e) => {
        console.log(e);
      });
    set((state) => ({ count: state.count + 1 }));
  },
  decreament: () => set((state) => ({ count: state.count - 1 })),
});

const counterStore = create(persist(counterLogic, { name: "counter" }));

export default counterStore;
