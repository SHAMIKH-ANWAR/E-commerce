import axios from 'axios';
import UserService from './UserService';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080',
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = UserService.getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const newToken = await UserService.refreshToken();
        axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // If refresh token fails, logout the user
        UserService.logout();
        // Redirect to login page
        window.location.href = '/Login';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;