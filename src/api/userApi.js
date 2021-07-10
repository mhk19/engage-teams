import { axiosInstance } from './axiosInstance';
import $ from 'jquery';
import { CONFIG } from '../config/config';

async function login(email, password) {
  try {
    const response = await axiosInstance.get('/login', { email: email, password: password });
    return response.request.response;
  } catch (error) {
    return await Promise.reject(error);
  }
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
    data: { displayName: name, email: email, password: password },
    dataType: 'json',
  }).done((res) => {
    return res;
  });
}

async function getAllUsers() {
  try {
    const response = await axiosInstance.get('/users');
    return JSON.parse(response.request.response);
  } catch (error) {
    return await Promise.reject(error);
  }
}

export { login, getToken, register, getAllUsers };
