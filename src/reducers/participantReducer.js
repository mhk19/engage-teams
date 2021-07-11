import { ADD_PARTICIPANT, RESET_PARTICIPANT } from '../constants/action-types';

const initialState = {
  participants: [],
};

export default function participantReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PARTICIPANT:
      let newPartipants = state.participants;
      newPartipants.push(action.payload.user);
      return {
        ...state,
        participants: newPartipants,
      };

    case RESET_PARTICIPANT:
      return {
        ...state,
        participants: [],
      };

    default:
      return state;
  }
}
