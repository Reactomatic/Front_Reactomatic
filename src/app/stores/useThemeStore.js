// stores/useThemeStore.js
import create from 'zustand';

const useThemeStore = create((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => {
    const newDarkMode = !state.darkMode;
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    return { darkMode: newDarkMode };
  }),
  initializeTheme: () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      set({ darkMode: true });
      document.documentElement.classList.add('dark');
    } else {
      set({ darkMode: false });
      document.documentElement.classList.remove('dark');
    }
  }
}));

export default useThemeStore;
