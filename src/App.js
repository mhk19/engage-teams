import React, { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import VideoCall from './components/videocall';
import WelcomePage from './components/auth';
import { getCookie } from './utils/handleCookies';
import * as localUserActions from './actions/localVideoUserActions';
import { useDispatch, useSelector } from 'react-redux';
import * as userFunctions from './api/userApi';

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUser: () => getUser(dispatch),
//   };
// }

const App = () => {
  const [authType, setAuthType] = useState('Register');
  const dispatch = useDispatch();
  const localUserStore = useSelector((state) => state.localVideoUser);
  useEffect(() => {
    const id = getCookie('userid');
    if (id) {
      const tokens = userFunctions.getToken(id);
      dispatch(localUserActions.SetUserId({ userId: id }));
      dispatch(
        localUserActions.SetTokens({ callToken: tokens.callToken, chatToken: token.chatToken }),
      );
    }
    // eslint-disable-next-line
  }, [localUserStore.userId]);
  return (
    <div className="App">
      {localUserStore.userId === '' ? (
        <WelcomePage authtype={authType} setAuthType={setAuthType} />
      ) : (
        <div>
          <NavBar />
          <VideoCall />
        </div>
      )}
    </div>
  );
};

export default App;
