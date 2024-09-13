import { create } from 'zustand';
import axios from '@/lib/axiosInstance';
import Cookies from 'js-cookie';  // Importer js-cookie

const localUser: any = localStorage.getItem('user')
const localToken = localStorage.getItem('token')
const useAuthStore = create((set) => ({
  user: localUser || null,
  token: localToken || null as string | null,
  isAuthenticated: localUser != undefined || false as boolean,
  isAdmin: (localUser && localUser.role === 'admin') as boolean,
  
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

      // Stocker dans localStorage et cookies
      localStorage.setItem('token', token);
      localStorage.setItem('user', user);
      Cookies.set('token', token, { expires: 7 });  // Le token expire après 7 jours

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
      localStorage.setItem('user', user);
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

  initializeAuth: () => {
    const token = Cookies.get('token');  // Récupérer le token depuis les cookies ou localStorage
    if (token) {
      set({ token, isAuthenticated: true });
      // Optionnel : faire un appel API pour récupérer les infos utilisateur ici si nécessaire
    }
  },
}));

export default useAuthStore;
