import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import remoteVideoReducer from '../reducers/remoteVideoReducer';
import localVideoReducer from '../reducers/localVideoReducer';
import navigationReducer from '../reducers/navigationReducer';
import participantReducer from '../reducers/participantReducer';
import deviceReducer from '../reducers/deviceReducer';

const rootReducer = combineReducers({
  user: userReducer,
  remoteVideoUser: remoteVideoReducer,
  localVideoUser: localVideoReducer,
  navigation: navigationReducer,
  participantList: participantReducer,
  devices: deviceReducer,
});

const store = createStore(rootReducer);
export default store;
