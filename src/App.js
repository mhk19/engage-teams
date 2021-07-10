import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import VideoCall from './components/videocall';
import HomePage from './components/home';
import WelcomePage from './components/auth';
import { getCookie } from './utils/handleCookies';
import * as localUserActions from './actions/localVideoUserActions';
import { useDispatch, useSelector } from 'react-redux';
import * as userFunctions from './api/userApi';
import * as navActions from './actions/navigationActions';

const App = () => {
  const [authType, setAuthType] = useState('Register');
  const dispatch = useDispatch();
  const localUserStore = useSelector((state) => state.localVideoUser);
  const navStore = useSelector((state) => state.navigation);
  console.log(navStore);
  useEffect(() => {
    const id = getCookie('userid');
    console.log(localUserStore.callToken);
    if (id && localUserStore.callToken === '') {
      userFunctions.getToken(id).then((tokens) => {
        dispatch(
          localUserActions.SetTokens({
            callToken: tokens.call.token,
            chatToken: tokens.chat.token,
          }),
        );
        if (localUserStore.userId === '') dispatch(localUserActions.SetUserId({ userId: id }));
        dispatch(navActions.ToggleNavHome());
        dispatch(navActions.ToggleTabAuth({ isAuth: false }));
      });
    }
    // eslint-disable-next-line
  }, [localUserStore.userId]);
  return (
    <div className="App">
      {localUserStore.userId !== '' && !navStore.isAuth ? <NavBar /> : null}
      {navStore.isAuth ? (
        <WelcomePage authtype={authType} setAuthType={setAuthType} />
      ) : navStore.isHome ? (
        <HomePage />
      ) : (
        <VideoCall />
      )}
    </div>
  );
};

export default App;
