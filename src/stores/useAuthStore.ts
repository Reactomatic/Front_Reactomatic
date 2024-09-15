import { create } from 'zustand';
import axios from '@/lib/axiosInstance';
import Cookies from 'js-cookie';  // Importer js-cookie

const localUser: any = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
const localToken = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

const useAuthStore = create((set) => ({
  user: localUser ? JSON.parse(localUser) : null,
  token: localToken || null as string | null,
  isAuthenticated: localUser != undefined || false as boolean,
  isAdmin: (localUser && JSON.parse(localUser).role === 'admin') as boolean,
  // isAdmin: () => {
  //   console.log('TEST')
  //   console.log(JSON.parse(localUser))
  //   console.log(JSON.parse(localUser).role)
  //   return false
  // }, 

  register: async (email: string, password: string, firstName: string, lastName: string) => {
   
    try {
      const response = await axios.post('/auth/register', { email, password, firstName, lastName });

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('Registration failed:', error);
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

      // Stocker dans localStorage et cookies
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user));
      Cookies.set('token', access_token, { expires: 7 });  // Le token expire après 7 jours

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
      isAdmin: false,
    });

    // Supprimer le token du localStorage et des cookies
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    Cookies.remove('token');
  },

  forgotPassword: async (email: string) => {
    try {
      const response = await axios.post('/auth/forgot-password', { email });

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('Forgot password failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

  resetPassword: async (password: string, token: string) => {
    try {
      const response = await axios.post('/auth/reset-password', { newPassword:password, token });

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('Reset password failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  },

  initializeAuth: () => {
    const token = Cookies.get('token');  // Récupérer le token depuis les cookies ou localStorage
    if (token) {
      set({ token, isAuthenticated: true });
      // Optionnel : faire un appel API pour récupérer les infos utilisateur ici si nécessaire
    }
  },

  sendSupportEmail: async (lastName: string, firstName: string, email: string, message: string) => {
    try {
      const response = await axios.post('/auth/support-email', { lastName, firstName, email, message });

      return { status: response.status, data: response.data };
    } catch (error: any) {
      console.error('Reset password failed:', error);
      return { status: error.response.status, message: error.response.data.message };
    }
  }
}));

export default useAuthStore;
