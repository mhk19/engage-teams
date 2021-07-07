import { axiosInstance } from '../api/axiosInstance';

const loginUser = (email) => {
  return axiosInstance
    .get(
      '/user',
      { email: email },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
    .then((response) => {
      const res = JSON.parse(response.request.response);
      return res;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

const register = (name, email, password) => {
  return axiosInstance
    .post(
      '/user',
      { name: name, email: email, password: password },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      },
    )
    .then((response) => {
      const res = JSON.parse(response.request.response);
      return res;
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};

export default { loginUser, register };
