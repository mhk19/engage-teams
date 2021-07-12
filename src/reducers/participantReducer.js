import { ADD_PARTICIPANT, RESET_PARTICIPANT, REMOVE_PARTICIPANT } from '../constants/action-types';

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

    case REMOVE_PARTICIPANT:
      let removedParticipants = state.participants;
      removedParticipants.forEach((user, index) => {
        if (user.userId === action.payload.userId) {
          removedParticipants.splice(index, 1);
        }
      });
      return {
        ...state,
        participants: removedParticipants,
      };

    default:
      return state;
  }
}
