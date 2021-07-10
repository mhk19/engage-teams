import React from 'react';
import '../styles/home.css';
import * as navActions from '../actions/navigationActions';
import { useDispatch } from 'react-redux';

const HomePage = () => {
  const dispatch = useDispatch();
  dispatch(navActions.ToggleNavHome());
  return (
    <div className="home-outer-container">
      <div className="home-left">
        <div className="home-conversation">
          <h2 className="home-heading">Start an instant conversation</h2>
          <input className="home-input" placeholder="Enter conversation name" />
          <button className="home-button-solid">Start Conversation</button>
        </div>
        <div className="home-or-bubble">OR</div>
        <div className="home-conversation">
          <input className="home-input input-bottom" placeholder="Enter conversation ID" />
          <button className="home-button-solid">Join Conversation</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
