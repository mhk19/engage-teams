import React from 'react';
import logo from '../assets/images/logo.svg';
import email from '../assets/images/email.svg';
import password from '../assets/images/password.svg';
import social from '../assets/images/social.svg';
import '../styles/auth.css';
import * as localUserActions from '../actions/localVideoUserActions';
import { login, register } from '../api/userApi';
import { useDispatch } from 'react-redux';
import { setCookie } from '../utils/handleCookies';
import PropTypes from 'prop-types';

const WelcomePage = (props) => {
  const dispatch = useDispatch();
  const handleRegister = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (name === '' || email === '' || password === '') alert('Please fill all the fields');
    else {
      register(name, email, password).then((user) => {
        setCookie('userid', user.communicationUserId);
        dispatch(localUserActions.SetUserId({ userId: user.communicationUserId }));
      });
    }
  };

  const handleLogin = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    if (email === '' || password === '') alert('Please fill all the fields');
    else {
      login(email, password).then((res) => {
        if (res === 'Not found') alert('Invalid credentials');
        else {
          setCookie('userid', res);
          dispatch(localUserActions.SetUserId({ userId: res }));
        }
      });
    }
  };

  const switchToRegister = () => {
    props.setAuthType('Register');
  };

  const switchToLogin = () => {
    props.setAuthType('Login');
  };
  return (
    <div className="auth-outer-container">
      <div className="auth-header">
        <p className="auth-welcome">Welcome!</p>
        <img className="auth-logo" src={logo} alt="logo" />
      </div>
      {props.authtype === 'Register' ? (
        <h1 className="auth-heading">Register</h1>
      ) : (
        <h1 className="auth-heading">Login</h1>
      )}
      {props.authtype === 'Register' ? (
        <div className="auth-input-container">
          <img className="auth-icon" src={social} alt="icon" />
          <input className="auth-input" placeholder="Name" id="name" />
        </div>
      ) : null}
      <div className="auth-input-container">
        <img className="auth-icon" src={email} alt="icon" />
        <input className="auth-input" placeholder="Email" id="email" />
      </div>
      <div className="auth-input-container">
        <img className="auth-icon" src={password} alt="icon" />
        <input className="auth-input" type="password" placeholder="Password" id="password" />
      </div>
      <div className="auth-footer">
        {props.authtype === 'Register' ? (
          <button className="auth-button-solid" onClick={handleRegister}>
            Register
          </button>
        ) : (
          <button className="auth-button-solid" onClick={handleLogin}>
            Login
          </button>
        )}
        {props.authtype === 'Login' ? (
          <div className="auth-footer-right">
            <p className="auth-graytext">Don&apos;t have an account?</p>
            <p className="auth-text-button" onClick={switchToRegister}>
              Register here
            </p>
          </div>
        ) : (
          <div className="auth-footer-right">
            <p className="auth-graytext">Already have an account?</p>
            <p className="auth-text-button" onClick={switchToLogin}>
              Login here
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;

WelcomePage.propTypes = {
  authtype: PropTypes.string,
  setAuthType: PropTypes.func,
};
