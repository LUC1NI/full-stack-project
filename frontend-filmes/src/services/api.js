import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5085' 
});

export default api;
