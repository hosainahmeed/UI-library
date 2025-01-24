/* eslint-disable no-undef */
import axios from 'axios';

// Create Axios Instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.example.com', // Replace with your API URL
  timeout: 10000, // 10 seconds timeout
});

// Add Request Interceptor (Attach Authorization Token)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access-token'); // Get token from localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add Response Interceptor (Handle Errors Globally)
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status } = error.response;

      // Handle Unauthorized (401) or Forbidden (403)
      if (status === 401 || status === 403) {
        localStorage.removeItem('access-token'); // Clear token
        window.location.href = '/login'; // Redirect to login
      }
    }
    return Promise.reject(error);
  }
);

export default api;
