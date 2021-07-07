import {
  ADD_REMOTE_STREAM,
  REMOVE_REMOTE_STREAM,
  TOGGLE_IS_REMOTE_VIDEO_AVAILABLE,
  SET_REMOTE_USER_NAME,
} from '../constants/action-types';

export const AddRemoteStream = (data) => ({
  type: ADD_REMOTE_STREAM,
  payload: data,
});

export const RemoveRemoteStream = (data) => ({
  type: REMOVE_REMOTE_STREAM,
  payload: data,
});

export const ToggleIsRemoteVideoAvailable = (data) => ({
  type: TOGGLE_IS_REMOTE_VIDEO_AVAILABLE,
  payload: data,
});

export const SetRemoteUserName = (data) => ({
  type: SET_REMOTE_USER_NAME,
  payload: data,
});
