import { TAB_CHAT, TAB_PARTICIPANT, TAB_SETTINGS } from '../constants/action-types';

const initialState = {
  isParticipantListActive: true,
  isChatActive: false,
  isSettingsActive: false,
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

    default:
      return state;
  }
}
