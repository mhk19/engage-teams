import {
  TAB_CHAT,
  TAB_PARTICIPANT,
  TAB_SETTINGS,
  TOGGLE_TAB_HOME,
  TAB_HOME,
  TAB_AUTH,
} from '../constants/action-types';

export const ToggleParticipantTab = () => ({
  type: TAB_PARTICIPANT,
});

export const ToggleSettingsTab = () => ({
  type: TAB_SETTINGS,
});

export const ToggleChatTab = () => ({
  type: TAB_CHAT,
});

export const ToggleNavHome = () => ({
  type: TOGGLE_TAB_HOME,
});

export const ToggleTabHome = () => ({
  type: TAB_HOME,
});

export const ToggleTabAuth = (data) => ({
  type: TAB_AUTH,
  payload: data,
});
