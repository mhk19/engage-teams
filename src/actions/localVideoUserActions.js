import {
  ADD_LOCAL_STREAM,
  REMOVE_LOCAL_STREAM,
  TOGGLE_MIC,
  TOGGLE_VIDEO,
  MICROPHONE,
  SPEAKER,
  CAMERA,
  SET_DISPLAY_NAME,
  SET_LOCAL_USER_ID,
  SET_TOKENS,
  SET_CHAT_CLIENT_REF,
} from '../constants/action-types';

export const AddLocalStream = (data) => ({
  type: ADD_LOCAL_STREAM,
  payload: data,
});

export const RemoveLocalStream = (data) => ({
  type: REMOVE_LOCAL_STREAM,
  payload: data,
});

export const ToggleMic = () => ({
  type: TOGGLE_MIC,
});

export const ToggleVideo = () => ({
  type: TOGGLE_VIDEO,
});

export const SetMicrophone = (data) => ({
  type: MICROPHONE,
  payload: data,
});

export const SetSpeaker = (data) => ({
  type: SPEAKER,
  payload: data,
});

export const SetCamera = (data) => ({
  type: CAMERA,
  payload: data,
});

export const SetDisplayName = (data) => ({
  type: SET_DISPLAY_NAME,
  payload: data,
});

export const SetUserId = (data) => ({
  type: SET_LOCAL_USER_ID,
  payload: data,
});

export const SetTokens = (data) => ({
  type: SET_TOKENS,
  payload: data,
});

export const SetChatClientRef = (data) => ({
  type: SET_CHAT_CLIENT_REF,
  payload: data,
});
