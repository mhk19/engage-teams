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
        console.log(user);
        setCookie('userid', user.communicationUserId);
        dispatch(localUserActions.SetUserId({ userId: user.communicationUserId }));
      });
    }
  };

  const handleLogin = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('reached here');
    if (email === '' || password === '') alert('Please fill all the fields');
    else {
      login(email, password).then((res) => {
        console.log(res);
        setCookie('userid', res);
        dispatch(localUserActions.SetUserId({ userId: res }));
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
    <div className="outer-container">
      <div className="header">
        <p className="welcome">Welcome!</p>
        <img className="logo" src={logo} alt="logo" />
      </div>
      {props.authtype === 'Register' ? (
        <h1 className="heading">Register</h1>
      ) : (
        <h1 className="heading">Login</h1>
      )}
      {props.authtype === 'Register' ? (
        <div className="input-container">
          <img className="icon" src={social} alt="icon" />
          <input className="input" placeholder="Name" id="name" />
        </div>
      ) : null}
      <div className="input-container">
        <img className="icon" src={email} alt="icon" />
        <input className="input" placeholder="Email" id="email" />
      </div>
      <div className="input-container">
        <img className="icon" src={password} alt="icon" />
        <input className="input" type="password" placeholder="Password" id="password" />
      </div>
      <div className="footer">
        {props.authtype === 'Register' ? (
          <button className="button-solid" onClick={handleRegister}>
            Register
          </button>
        ) : (
          <button className="button-solid" onClick={handleLogin}>
            Login
          </button>
        )}
        {props.authtype === 'Login' ? (
          <div className="footer-right">
            <p className="graytext">Don&apost have an account?</p>
            <p className="text-button" onClick={switchToRegister}>
              Register here
            </p>
          </div>
        ) : (
          <div className="footer-right">
            <p className="graytext">Already have an account?</p>
            <p className="text-button" onClick={switchToLogin}>
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
