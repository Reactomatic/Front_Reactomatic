// stores/useAuthStore.js
import { create } from 'zustand';
import axios from '@/lib/axiosInstance';


const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  register: async (email, password, firstName, lastName) => {
    try {
      console.log('Hey')
      const response = await axios.post('/auth/register', { email, password, firstName, lastName });
      console.log(response)
      const { user, token } = response.data;

      set({
        user,
        token,
        isAuthenticated: true,
      });

      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  },    

  login: async (email, password) => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      const { user, access_token } = response.data;

      set({
        user,
        token: access_token,
        isAuthenticated: true,
      });

      localStorage.setItem('token', access_token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  },

  logout: () => {
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });

    localStorage.removeItem('token');
  },

  initializeAuth: () => {
    const token = localStorage.getItem('token');
    if (token) {
      set({ token, isAuthenticated: true });
      // Fetch user data if needed
    }
  },
}));

export default useAuthStore;
