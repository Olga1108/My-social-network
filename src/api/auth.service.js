import axios from './axios.instance';


import store from '../store/store';
import { logoutThunk } from '../store/users/thunks';

axios.interceptors.request.use(
  function (config) {
    config.headers = {
      ...config.headers,
      Authorization: localStorage.getItem('access_token'),
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    if (response.config.url === "/users/current" &&
      response.config.method === 'patch' &&
      response.status === 200) {
        alert('Profile was changed')
      
    }

    return response;
  },
  function (error) {
    
    if (error.response.status === 401 || error.response.status === 400) {
      console.log(error.response.status)
      store.dispatch(logoutThunk());
    }
    return Promise.reject(error);
  }
);

export const loginFetch = async userData => {
  const { data } = await axios.post('/auth/login', userData);
  return data;
}

export const registrationFetch = async userData => {
  const { data } = await axios.post('/auth/registration', userData);
  return data;
}
