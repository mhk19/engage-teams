import { axiosInstance } from './axiosInstance';
import $ from 'jquery';
import { CONFIG } from '../config/config';

function login(email, password) {
  return axiosInstance
    .get('/login', { email: email, password: password })
    .then((response) => {
      return response.request.response;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
}

function getToken(uid) {
  return $.ajax({
    method: 'GET',
    url: `${CONFIG.serverURL}/token`,
    data: { uid: uid },
    dataType: 'json',
  }).done((res) => {
    console.log(res);
    return res.responseJSON;
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
