// Для разработки и продакшена
export const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:3000/api' 
  : '/api';

export const config = {
  apiBaseUrl: API_BASE_URL
};
