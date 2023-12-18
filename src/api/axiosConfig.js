import axios from 'axios';
import { BASE_URL } from '../constants';

// Create an instance of Axios with default configuration
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json', // Other default headers here
  },
});

// Add an interceptor to include 'X-Tenant' header in every request
axiosInstance.interceptors.request.use(
  (config) => {
    // Modify config to include 'X-Tenant' header
    const updatedConfig = {
      ...config,
      headers: {
        ...config.headers,
        'X-Tenant': 'default', // Replace 'default' with the actual tenant ID
      },
    };
    return updatedConfig;
  },
  (error) => {
    // Handle request errors
    return Promise.reject(error);
  }
);

// Export the configured axios instance
export default axiosInstance;