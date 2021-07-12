import { ADD_PARTICIPANT, RESET_PARTICIPANT, REMOVE_PARTICIPANT } from '../constants/action-types';

export const AddParticipant = (data) => ({
  type: ADD_PARTICIPANT,
  payload: data,
});

export const ResetParticipant = () => ({
  type: RESET_PARTICIPANT,
});

export const RemoveParticipant = (data) => ({
  type: REMOVE_PARTICIPANT,
  payload: data,
});
