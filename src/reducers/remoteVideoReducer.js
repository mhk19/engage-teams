import {
  ADD_REMOTE_STREAM,
  REMOVE_REMOTE_STREAM,
  TOGGLE_IS_REMOTE_VIDEO_AVAILABLE,
  SET_REMOTE_USER_NAME,
  SET_REMOTE_USER_ID,
} from '../constants/action-types';

const initialState = {
  remoteVideoStream: null,
  isAvailable: false,
  displayName: '',
  userId: '',
};

export default function remoteVideoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_REMOTE_STREAM:
      return {
        ...state,
        remoteVideoStream: action.payload.remoteVideoStream,
      };

    case REMOVE_REMOTE_STREAM:
      return {
        ...state,
        remoteVideoStream: null,
      };

    case TOGGLE_IS_REMOTE_VIDEO_AVAILABLE:
      return {
        ...state,
        isAvailable: action.payload.isAvailable,
      };

    case SET_REMOTE_USER_NAME:
      return {
        ...state,
        displayName: action.payload.displayName,
      };

    case SET_REMOTE_USER_ID:
      return {
        ...state,
        userId: action.payload.userId,
      };

    default:
      return state;
  }
}
