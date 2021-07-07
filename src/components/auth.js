import React from 'react';
import logo from '../assets/images/logo.svg';
import email from '../assets/images/email.svg';
import password from '../assets/images/password.svg';
import social from '../assets/images/social.svg';
import '../styles/auth.css';

const WelcomePage = (props) => {
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
          <input className="input" placeholder="Name" />
        </div>
      ) : null}
      <div className="input-container">
        <img className="icon" src={email} alt="icon" />
        <input className="input" placeholder="Email" />
      </div>
      <div className="input-container">
        <img className="icon" src={password} alt="icon" />
        <input className="input" type="password" placeholder="Password" />
      </div>
      <div className="footer">
        {props.authtype === 'Register' ? (
          <button className="button-solid">Register</button>
        ) : (
          <button className="button-solid">Login</button>
        )}
        {props.authtype === 'Login' ? (
          <div className="footer-right">
            <p className="graytext">Don't have an account?</p>
            <p className="text-button">Register here</p>
          </div>
        ) : (
          <div className="footer-right">
            <p className="graytext">Already have an account?</p>
            <p className="text-button">Login here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
