import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import VideoCall from './components/videocall';
import WelcomePage from './components/auth';
import { getCookie } from './utils/handleCookies';
import * as localUserActions from './actions/localVideoUserActions';
import { useDispatch, useSelector } from 'react-redux';
import * as userFunctions from './api/userApi';

const App = () => {
  const [authType, setAuthType] = useState('Register');
  const dispatch = useDispatch();
  const localUserStore = useSelector((state) => state.localVideoUser);
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
      });
      if (localUserStore.userId === '') dispatch(localUserActions.SetUserId({ userId: id }));
    }
    // eslint-disable-next-line
  }, [localUserStore.userId]);
  return (
    <div className="App">
      {localUserStore.userId !== '' ? <NavBar /> : null}
      {localUserStore.userId === '' ? (
        <WelcomePage authtype={authType} setAuthType={setAuthType} />
      ) : (
        <VideoCall />
      )}
    </div>
  );
};

export default App;
