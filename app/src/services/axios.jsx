
import axios from 'axios';

const AxiosInstance = (baseURL) => {
  return axios.create({
    baseURL, 
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default AxiosInstance;
