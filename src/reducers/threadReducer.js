import {
  SET_THREAD_ID,
  SET_MESSAGE_HISTORY,
  ADD_MESSAGE,
  SET_THREAD_PARTICIPANTS,
  ADD_THREAD_PARTICIPANT,
  ADD_MESSAGE_FRONT,
} from '../constants/action-types';

const initialState = {
  threadId: '',
  messages: [],
  participants: [],
};

export default function threadReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THREAD_ID:
      return {
        ...state,
        threadId: action.payload.threadId,
      };

    case SET_MESSAGE_HISTORY:
      return {
        ...state,
        messages: action.payload.messages,
      };

    case ADD_MESSAGE:
      const newMessages = state.messages;
      newMessages.push(action.payload.message);
      return {
        ...state,
        messages: newMessages,
      };

    case ADD_MESSAGE_FRONT:
      const messages_u = state.messages;
      messages_u.unshift(action.payload.message);
      return {
        ...state,
        messages: messages_u,
      };

    case SET_THREAD_PARTICIPANTS:
      return {
        ...state,
        participants: action.payload.participants,
      };

    case ADD_THREAD_PARTICIPANT:
      const newPartipants = state.participants;
      newPartipants.push(action.payload.participant);
      return {
        ...state,
        participants: newPartipants,
      };

    default:
      return state;
  }
}
