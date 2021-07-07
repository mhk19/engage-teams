import { ADD_PARTICIPANT } from '../constants/action-types';

const initialState = {
  participants: [],
};

export default function participantReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PARTICIPANT:
      console.log(action.payload.user);
      let newPartipants = state.participants;
      newPartipants.push(action.payload.user);
      return {
        ...state,
        participants: newPartipants,
      };

    default:
      return state;
  }
}
