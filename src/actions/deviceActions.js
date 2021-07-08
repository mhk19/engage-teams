import {
  ADD_SPEAKER_DEVICES,
  ADD_MICROPHONE_DEVICES,
  SET_MICROPHONE,
  SET_SPEAKER,
  SET_DEVICES,
  UPDATE_AUDIO_DEVICES,
} from '../constants/action-types';

export const SetDevices = (data) => ({
  type: SET_DEVICES,
  payload: data,
});

export const UpdateAudioDevices = (data) => ({
  type: UPDATE_AUDIO_DEVICES,
  payload: data,
});

export const AddSpeakerDevices = (data) => ({
  type: ADD_SPEAKER_DEVICES,
  payload: data,
});

export const AddMicrophoneDevices = (data) => ({
  type: ADD_MICROPHONE_DEVICES,
  payload: data,
});

export const SetMicrophone = (data) => ({
  type: SET_MICROPHONE,
  payload: data,
});

export const SetSpeaker = (data) => ({
  type: SET_SPEAKER,
  payload: data,
});
