import {
  SET_THREAD_ID,
  SET_MESSAGE_HISTORY,
  ADD_MESSAGE,
  SET_THREAD_PARTICIPANTS,
  ADD_THREAD_PARTICIPANT,
} from '../constants/action-types';

export const SetThreadId = (data) => ({
  type: SET_THREAD_ID,
  payload: data,
});

export const SetMessageHistory = (data) => ({
  type: SET_MESSAGE_HISTORY,
  payload: data,
});

export const AddMessage = (data) => ({
  type: ADD_MESSAGE,
  payload: data,
});

export const AddThreadParticipant = (data) => ({
  type: ADD_THREAD_PARTICIPANT,
  payload: data,
});

export const SetThreadParticipant = (data) => ({
  type: SET_THREAD_PARTICIPANTS,
  payload: data,
});
