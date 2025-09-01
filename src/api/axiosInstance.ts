import axios, { AxiosInstance } from 'axios';
import { base_url } from './api_url';


const apiInstance: AxiosInstance = axios.create({
  baseURL: base_url,
//   timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  withCredentials: true
});

apiInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);


// apiInstance.interceptors.request.use(
//   (config) => {

//     const token = localStorage.getItem('token') || sessionStorage.getItem('token') 
//     if (token) {
//     //   config.headers.Authorization = `Bearer ${token}`;
//         config.headers["x-access-token"] = token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );


apiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {

    if (error.response && error.response.status === 401) {
      console.error('Unauthorized access. Redirecting to login.');
    }
    return Promise.reject(error);
  }
);

export default apiInstance;