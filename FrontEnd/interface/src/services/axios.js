import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // URL base da sua API
  timeout: 5000, // Tempo limite, se desejar
});

// Exemplo: adicionando um interceptor para injetar o token em todas as requisições
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
