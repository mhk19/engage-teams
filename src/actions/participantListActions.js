import { ADD_PARTICIPANT } from '../constants/action-types';

export const AddParticipant = (data) => ({
  type: ADD_PARTICIPANT,
  payload: data,
});
