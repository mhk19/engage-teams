import { SET_SELECTED_USER, RESET_SELECTED_USER } from '../constants/action-types';

const initialState = {
  isUserSelected: false,
  selectedUserId: '',
  threadId: '',
  groupId: '',
};

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SELECTED_USER:
      return {
        ...state,
        isUserSelected: true,
        selectedUserId: action.payload.remoteUID,
        threadId: action.payload.threadId,
        groupId: action.payload.groupId,
      };

    case RESET_SELECTED_USER:
      return initialState;

    default:
      return state;
  }
}
