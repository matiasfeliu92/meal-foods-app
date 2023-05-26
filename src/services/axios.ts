import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
});

export default api;
