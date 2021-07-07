import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';
import App from './App';
import left_design from './assets/images/left-design.svg';
import right_design from './assets/images/right-design.svg';
import 'typeface-roboto';
import 'typeface-poppins';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <img className="left-design" src={left_design} alt="" />
      <App />
      <img className="right-design" src={right_design} alt="" />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
