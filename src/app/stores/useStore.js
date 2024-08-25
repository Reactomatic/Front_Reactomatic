// stores/useStore.js
import {create} from 'zustand';

const useStoreBearTest = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  resetCount: () => set({ count: 0 }),
  // Ajoutez d'autres états ou actions ici
}));

export default useStoreBearTest;