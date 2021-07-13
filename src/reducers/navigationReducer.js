import {
  TAB_CHAT,
  TAB_PARTICIPANT,
  TAB_SETTINGS,
  TOGGLE_TAB_HOME,
  TAB_HOME,
  TAB_AUTH,
} from '../constants/action-types';

const initialState = {
  isParticipantListActive: true,
  isChatActive: false,
  isSettingsActive: false,
  isHome: false,
  isHomeActive: true,
  isAuth: true,
};

export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case TAB_PARTICIPANT:
      return {
        ...state,
        isParticipantListActive: true,
        isChatActive: false,
        isSettingsActive: false,
      };

    case TAB_SETTINGS:
      return {
        ...state,
        isSettingsActive: true,
        isParticipantListActive: false,
        isChatActive: false,
      };

    case TAB_CHAT:
      return {
        ...state,
        isChatActive: true,
        isParticipantListActive: false,
        isSettingsActive: false,
      };

    case TOGGLE_TAB_HOME:
      window.localStorage.setItem('isHome', !state.isHome);
      return {
        ...state,
        isHome: !state.isHome,
        isHomeActive: true,
      };

    case TAB_HOME:
      return {
        ...state,
        isHomeActive: !state.isHomeActive,
      };

    case TAB_AUTH:
      return {
        ...state,
        isAuth: action.payload.isAuth,
      };

    default:
      return state;
  }
}
