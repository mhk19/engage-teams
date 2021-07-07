import { SET_USER } from '../constants/action-types';

const initialState = {
  login: false,
  name: '',
  email: '',
  user_id: '',
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        login: true,
        name: action.payload.name,
        email: action.payload.email,
        user_id: action.payload.user_id,
      };
    default:
      return state;
  }
}
