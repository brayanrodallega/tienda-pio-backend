import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://didactic-space-guacamole-pq46p7j4prv34-3000.app.github.dev'
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
