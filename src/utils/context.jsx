import { create } from "zustand";

export const useSelector = create((set) => ({
  selection: null,
  setSelection: (selection) => set({ selection }),
}));

export const useScore = create((set) => ({
  score: 0,
  incrementScore: () => set((state) => ({ score: state.score + 1 })),
}));
