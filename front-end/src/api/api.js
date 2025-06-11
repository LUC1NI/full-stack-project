import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:5085'
});

export default api;
