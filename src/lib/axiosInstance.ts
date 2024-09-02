import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000', // Base URL de votre backend
});

export default axiosInstance;
