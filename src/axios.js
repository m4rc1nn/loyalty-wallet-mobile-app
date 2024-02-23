import axios from 'axios';
import { BASE_API_URL } from '@env';

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
});

export default axiosInstance;