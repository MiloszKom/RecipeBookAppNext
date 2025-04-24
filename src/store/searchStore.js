import { create } from "zustand";

const useSearchStore = create((set) => ({
  searchTerm: "",
  difficulty: "All",
  setSearchTerm: (term) => set({ searchTerm: term }),
  setDifficulty: (level) => set({ difficulty: level }),
}));

export default useSearchStore;
