import React, { useEffect, useRef } from 'react';
import '../styles/home.css';
import * as userListActions from '../actions/participantListActions';
import * as localUserActions from '../actions/localVideoUserActions';
import * as navActions from '../actions/navigationActions';
import * as homeActions from '../actions/homeActions';
import * as threadActions from '../actions/threadActions';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../api/userApi';
import Participants from './participantList';
import { ChatClient } from '@azure/communication-chat';
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import env from '../env/env';
import MessageContainer from './messageContainer';
import start_call from '../assets/images/start-call.svg';
import illustration_home from '../assets/images/illustration-home.svg';

const HomePage = () => {
  const dispatch = useDispatch();
  const chatClientRef = useRef();
  const localStore = useSelector((state) => state.localVideoUser);
  const homeStore = useSelector((state) => state.home);

  const subscribe = async () => {
    const chatClient = chatClientRef.current;
    await chatClient.startRealtimeNotifications();
    chatClient.on('chatMessageReceived', (e) => {
      console.log('Notification chatMessageReceived!', e);
      if (
        e.type === 'Text' &&
        (e.sender.communicationUserId === homeStore.selectedUserId ||
          e.sender.communicationUserId === localStore.userId)
      ) {
        const msg = {
          type: 'chat',
          payload: {
            senderId: e.sender.communicationUserId,
            senderDisplayName: e.senderDisplayName,
            messageId: e.id,
            content: e.message,
            attached: false,
            type: 'text',
            createdOn: e.createdOn,
          },
        };
        dispatch(threadActions.AddMessage({ message: msg }));
        console.log(thread.messages);
      }
    });
  };

  useEffect(() => {
    dispatch(userListActions.ResetParticipant());
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
    subscribe();
    // eslint-disable-next-line
  }, []);
  const handleJoinCall = () => {
    console.log('clicked');
    dispatch(navActions.ToggleNavHome());
  };

  const handleBackButton = () => {
    dispatch(homeActions.ResetSelectedUser());
  };

  return (
    <div className="home-outer-container">
      {homeStore.isUserSelected ? (
        <div className="home-message-sidebar message-sidebar">
          <div className="home-message-header">
            <div className="home-message-header-back" onClick={handleBackButton}>
              {'< Back'}
            </div>
            <div className="home-message-header-start" onClick={handleJoinCall}>
              <img src={start_call} className="start-call-img" />
              <p>Start Call</p>
            </div>
          </div>
          <MessageContainer type="home" />
        </div>
      ) : (
        <div className="home-left">
          {/* <div className="home-conversation">
            <h2 className="home-heading">Start an instant conversation</h2>
            <input className="home-input" placeholder="Enter conversation name" />
            <button className="home-button-solid">Start Conversation</button>
          </div>
          <div className="home-or-bubble">OR</div>
          <div className="home-conversation">
            <input className="home-input input-bottom" placeholder="Enter conversation ID" />
            <button className="home-button-solid">Join Conversation</button>
          </div> */}
          <img src={illustration_home} />
          <h2 className="home-heading">Select user to start an instant conversation</h2>
        </div>
      )}
      <Participants type="home" />
    </div>
  );
};

export default HomePage;
