import axios from 'axios';
import * as dotenv from 'dotenv';
// import useAuthStore from '@/stores/useAuthStore';

dotenv.config();

// Crée une instance d'axios
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000',
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
