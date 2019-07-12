import axios from 'axios';
import requestInterceptor from '../core/interceptors/request.interceptor';
import env from './constants/environment.constants';

const onErrorInterceptor = error => Promise.reject(error);

const axiosClient = axios.create({
  baseURL: env.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosClient.interceptors.request.use(requestInterceptor, onErrorInterceptor);

export default axiosClient;
