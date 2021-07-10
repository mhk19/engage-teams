import {
  TAB_CHAT,
  TAB_PARTICIPANT,
  TAB_SETTINGS,
  TOGGLE_TAB_HOME,
  TAB_HOME,
} from '../constants/action-types';

const initialState = {
  isParticipantListActive: true,
  isChatActive: false,
  isSettingsActive: false,
  isHome: false,
  isHomeActive: true,
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

    default:
      return state;
  }
}
