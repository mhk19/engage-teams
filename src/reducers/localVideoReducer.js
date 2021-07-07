import {
  ADD_LOCAL_STREAM,
  REMOVE_LOCAL_STREAM,
  TOGGLE_MIC,
  TOGGLE_VIDEO,
  MICROPHONE,
  SPEAKER,
  CAMERA,
  SET_DISPLAY_NAME,
} from '../constants/action-types';

const initialState = {
  localVideoStream: null,
  isMute: true,
  isVideoOn: true,
  microphone: '',
  speaker: '',
  camera: '',
  displayName: '',
};

export default function localVideoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LOCAL_STREAM:
      return {
        ...state,
        localVideoStream: action.payload.localVideoStream,
      };

    case REMOVE_LOCAL_STREAM:
      return {
        ...state,
        localVideoStream: null,
      };

    case TOGGLE_MIC:
      return {
        ...state,
        isMute: !state.isMute,
      };

    case TOGGLE_VIDEO:
      return {
        ...state,
        isVideoOn: !state.isVideoOn,
      };

    case MICROPHONE:
      return {
        ...state,
        microphone: action.payload.microphone,
      };

    case SPEAKER:
      return {
        ...state,
        speaker: action.payload.speaker,
      };

    case CAMERA:
      return {
        ...state,
        camera: action.payload.camera,
      };

    case SET_DISPLAY_NAME:
      return {
        ...state,
        displayName: action.payload.displayName,
      };

    default:
      return state;
  }
}
