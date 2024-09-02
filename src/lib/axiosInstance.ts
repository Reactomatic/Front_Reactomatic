import axios from 'axios';
// import * as dotenv from 'dotenv';

// dotenv.config();

console.log('Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL); // Vérifiez si l'URL est bien chargée

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000', // Base URL de votre backend
});

export default axiosInstance;
