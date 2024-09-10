import axios from 'axios';

// import useAuthStore from '@/stores/useAuthStore';
// import * as dotenv from 'dotenv';
// dotenv.config();

console.log('Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL); // Vérifiez si l'URL est bien chargée

// Crée une instance d'axios
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000',
});

// Interceptor pour ajouter le Bearer token
axiosInstance.interceptors.request.use(
  
  (config) => {
    // const { isAdmin, isAuthenticated } = useAuthStore.getState() as { isAdmin: string, isAuthenticated: boolean };

    const token = localStorage.getItem('token');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
