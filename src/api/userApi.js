import { axiosInstance } from './axiosInstance';
import $ from 'jquery';
import { CONFIG } from '../config/config';

function login(email, password) {
  return axiosInstance
    .put('/login', { email: email, password: password })
    .then((response) => {
      return response.request.response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

function getToken(uid) {
  return axiosInstance
    .put('/token', { uid: uid })
    .then((response) => {
      return JSON.parse(response.request.response);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

function register(name, email, password) {
  return $.ajax({
    method: 'PUT',
    url: `${CONFIG.serverURL}/user`,
    data: { name: name, email: email, password: password },
    dataType: 'json',
  }).done((res) => {
    return res;
  });
}

export { login, getToken, register };
