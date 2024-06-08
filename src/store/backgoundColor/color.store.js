import { create } from "zustand";

export const useColorStore = create((set) => ({
  backgroundColor: "#047a9c",
  setBackgroundColor: (color) => set({ backgroundColor: color }),
}));
