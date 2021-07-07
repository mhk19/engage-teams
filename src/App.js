import { useEffect, useState } from 'react';
import './App.css';
import NavBar from './components/navbar';
import VideoCall from './components/videocall';
// import getUser from './utils/getUser';
// import WelcomePage from './components/auth';
import { getCookie } from './utils/handleCookies';

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

const App = (props) => {
  const [userId, setUserId] = useState('');
  const id = getCookie('userid');
  if (id !== userId) setUserId(getCookie('userid'));
  useEffect(() => {
    //props.getUser();
  }, []);
  return (
    <div className="App">
      <NavBar />
      <VideoCall />
      {/* <WelcomePage authtype='Register'/> */}
    </div>
  );
};

export default App;
