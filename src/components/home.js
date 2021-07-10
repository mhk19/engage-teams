import React, { useEffect } from 'react';
import '../styles/home.css';
import * as navActions from '../actions/navigationActions';
import * as userListActions from '../actions/participantListActions';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../api/userApi';
import Participants from './participantList';

const HomePage = () => {
  const dispatch = useDispatch();
  const navStore = useSelector((state) => state.navigation);
  useEffect(() => {
    dispatch(navActions.ToggleNavHome());
    getAllUsers().then((users) => {
      users.forEach((user) => {
        console.log(user);
        dispatch(userListActions.AddParticipant({ user: user }));
      });
    });
  }, []);
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
      <Participants type="home" />
    </div>
  );
};

export default HomePage;
