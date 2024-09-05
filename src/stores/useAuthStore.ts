// stores/useAuthStore.js
import { create } from 'zustand';
import axios from '@/lib/axiosInstance';


const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  isAdmin: false,

  register: async (email: string, password: string, firstName: string, lastName: string) => {
    try {
      const response = await axios.post('/auth/register', { email, password, firstName, lastName });
      const { user, token } = response.data;

      set({
        user,
        token,
        isAuthenticated: true,
        isAdmin: user.role === 'admin',
      });

      localStorage.setItem('token', token);
      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('Login failed:', error);
      return { status: error.response.status, message: error.response.data.message };
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
        isAdmin: user.role === 'admin',
      });

      localStorage.setItem('token', access_token);
      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('Login failed:', error);
      return { status: error.response.status, message: error.response.data.message };
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
