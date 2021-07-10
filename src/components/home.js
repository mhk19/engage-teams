import React, { useEffect, useRef } from 'react';
import '../styles/home.css';
import * as userListActions from '../actions/participantListActions';
import * as localUserActions from '../actions/localVideoUserActions';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../api/userApi';
import Participants from './participantList';
import { ChatClient } from '@azure/communication-chat';
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import env from '../env/env';
import MessageContainer from './messageContainer';

const HomePage = () => {
  const dispatch = useDispatch();
  const chatClientRef = useRef();
  const localStore = useSelector((state) => state.localVideoUser);
  const homeStore = useSelector((state) => state.home);

  useEffect(() => {
    const userToken = localStore.chatToken;
    console.log(userToken);
    chatClientRef.current = new ChatClient(
      env.endpointUrl,
      new AzureCommunicationTokenCredential(userToken),
    );
    dispatch(localUserActions.SetChatClientRef({ chatClientRef: chatClientRef }));
    getAllUsers().then((users) => {
      users.forEach((user) => {
        console.log(user);
        if (user.communicationUserId !== localStore.userId) {
          dispatch(
            userListActions.AddParticipant({
              user: { displayName: user.displayName, userId: user.communicationUserId },
            }),
          );
        } else {
          dispatch(localUserActions.SetDisplayName({ displayName: user.displayName }));
        }
      });
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="home-outer-container">
      {homeStore.isUserSelected ? (
        <MessageContainer type="home" />
      ) : (
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
      )}
      <Participants type="home" />
    </div>
  );
};

export default HomePage;
