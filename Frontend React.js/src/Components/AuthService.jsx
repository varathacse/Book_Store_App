import axios from 'axios';

const API_URL = 'http://localhost:9090';

const AuthService = {
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    const { data } = response;
    if (data) {
      localStorage.setItem('token', data);
    }
    return data;
  },

  signup: async (userData) => {
    await axios.post(`${API_URL}/signup`, userData);
  },

  logout: () => {
    localStorage.removeItem('token'); // Remove token from localStorage
  },

  getToken: () => {
    return localStorage.getItem('token');
  },

  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    return !!token; // Return true if token exists, else false
  },

  getAuthHeader: () => {
    const token = localStorage.getItem('token');
    if (token) {
      return { headers: { auth: token } };
    }
    return {};
  },

};

export default AuthService;
