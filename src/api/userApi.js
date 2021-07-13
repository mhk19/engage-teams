import { axiosInstance } from './axiosInstance';
import $ from 'jquery';
import { CONFIG } from '../config/config';

async function login(email, password) {
  return $.ajax({
    method: 'GET',
    url: `${CONFIG.serverURL}/login`,
    data: { email: email, password: password },
    dataType: 'json',
  }).done((res) => {
    return res.responseJSON;
  });
}

function getToken(uid) {
  return $.ajax({
    method: 'GET',
    url: `${CONFIG.serverURL}/token`,
    data: { uid: uid },
    dataType: 'json',
  }).done((res) => {
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

function getGroup(uid, remoteUID) {
  return $.ajax({
    method: 'GET',
    url: `${CONFIG.serverURL}/findGroup`,
    data: { uid: uid, remoteUID: remoteUID },
    dataType: 'json',
  }).done((res) => {
    return res;
  });
}

function addGroup(uid, remoteUID, groupID, threadID) {
  return $.ajax({
    method: 'POST',
    url: `${CONFIG.serverURL}/addGroup`,
    data: { uid: uid, remoteUID: remoteUID, groupID: groupID, threadID: threadID },
    dataType: 'json',
  }).done((res) => {
    return res;
  });
}

export { login, getToken, register, getAllUsers, getGroup, addGroup };
