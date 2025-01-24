import api from './api';

// Reusable API Handler
const apiHandler = async (method, url, data = {}, options = {}) => {
  try {
    const response = await api({
      method,
      url,
      data,
      ...options,
    });

    return response.data; // Return only data, not the full response object
  } catch (error) {
    console.error('API Error:', error.message);

    // Handle Specific Error Types
    if (error.response) {
      const { status, data } = error.response;

      // Custom Error Messages
      if (status === 400) {
        throw new Error(data.message || 'Bad Request');
      } else if (status === 404) {
        throw new Error('Resource Not Found');
      } else if (status === 500) {
        throw new Error('Server Error');
      }
    }

    throw error; // Re-throw the error for further handling
  }
};

// API Shortcuts
export const get = (url, options) => apiHandler('get', url, {}, options);
export const post = (url, data, options) => apiHandler('post', url, data, options);
export const put = (url, data, options) => apiHandler('put', url, data, options);
export const del = (url, options) => apiHandler('delete', url, {}, options);

export default apiHandler;
