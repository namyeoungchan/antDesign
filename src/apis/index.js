import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    Authorization: localStorage.getItem('accessToken'),
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
  },
  transformRequest: [
    (data, headers) => {
      if (headers['Content-Type'] === 'application/json;charset=UTF-8') {
        return JSON.stringify(data);
      }
      return data;
    },
  ],
});

apiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status) {
      if (error.response.status === 400) {
        return Promise.resolve(error.response);
      }
    }
    return Promise.reject(error);
  },
);

export default apiInstance;
