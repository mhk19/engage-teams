import { TAB_CHAT, TAB_PARTICIPANT, TAB_SETTINGS } from '../constants/action-types';

export const ToggleParticipantTab = () => ({
  type: TAB_PARTICIPANT,
});

export const ToggleSettingsTab = () => ({
  type: TAB_SETTINGS,
});

export const ToggleChatTab = () => ({
  type: TAB_CHAT,
});
