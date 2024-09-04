// stores/useAuthStore.js
import { create } from 'zustand';
import axios from '@/lib/axiosInstance';


const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,

  register: async (email: string, password: string, firstName: string, lastName: string) => {
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

  login: async (email: string, password: string) => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      const { user, access_token } = response.data;

      set({
        user,
        token: access_token,
        isAuthenticated: true,
      });

      localStorage.setItem('token', access_token);
      return user;
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
