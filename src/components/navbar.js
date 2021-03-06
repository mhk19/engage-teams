import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as navigationActions from '../actions/navigationActions';
import logo from '../assets/images/logo.svg';
import social from '../assets/images/social.svg';
import participants_active from '../assets/images/participants-active.svg';
import chat from '../assets/images/chat.svg';
import chat_active from '../assets/images/chat-active.svg';
import settings from '../assets/images/settings.svg';
import settings_active from '../assets/images/settings-active.svg';
import home_active from '../assets/images/home-active.svg';
import home from '../assets/images/home-default.svg';
import '../styles/navbar.css';
import { getInitials } from '../utils/userIcon';

const NavBar = () => {
  const navStore = useSelector((state) => state.navigation);
  const localStore = useSelector((state) => state.localVideoUser);
  const dispatch = useDispatch();

  const toggleParticipantTab = () => {
    dispatch(navigationActions.ToggleParticipantTab());
  };

  const toggleChatTab = () => {
    dispatch(navigationActions.ToggleChatTab());
  };

  const toggleSettingsTab = () => {
    dispatch(navigationActions.ToggleSettingsTab());
  };

  const getAcronym = () => {
    if (localStore.displayName) return getInitials(localStore.displayName);
    return '';
  };

  return (
    <div className="nav-outer">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="nav-container">
        {navStore.isHome ? (
          navStore.isHomeActive ? (
            <img className="nav-icon" src={home_active} alt="social" />
          ) : (
            <img className="nav-icon" src={home} alt="social" onClick={toggleParticipantTab} />
          )
        ) : (
          <div>
            {navStore.isParticipantListActive ? (
              <img className="nav-icon" src={participants_active} alt="social" />
            ) : (
              <img className="nav-icon" src={social} alt="social" onClick={toggleParticipantTab} />
            )}
            {navStore.isChatActive ? (
              <img className="nav-icon" src={chat_active} alt="chat" />
            ) : (
              <img className="nav-icon" src={chat} alt="chat" onClick={toggleChatTab} />
            )}
            {navStore.isSettingsActive ? (
              <img className="nav-icon" src={settings_active} alt="settings" />
            ) : (
              <img className="nav-icon" src={settings} alt="settings" onClick={toggleSettingsTab} />
            )}
          </div>
        )}
      </div>
      <div className="user-container">
        <p className="user-icon">{getAcronym()}</p>
      </div>
    </div>
  );
};

export default NavBar;
