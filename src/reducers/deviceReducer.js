import {
  ADD_SPEAKER_DEVICES,
  ADD_MICROPHONE_DEVICES,
  SET_MICROPHONE,
  SET_SPEAKER,
  SET_DEVICES,
  UPDATE_AUDIO_DEVICES,
} from '../constants/action-types';

const initialState = {
  microphones: [],
  speakers: [],
  microphone: {},
  speaker: {},
};

export default function deviceReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DEVICES:
      return {
        ...state,
        microphones: action.payload.microphones,
        speakers: action.payload.speakers,
        microphone: action.payload.microphone,
        speaker: action.payload.speaker,
      };

    case UPDATE_AUDIO_DEVICES:
      return {
        ...state,
        microphones: action.payload.microphones,
        speakers: action.payload.speakers,
      };

    case ADD_MICROPHONE_DEVICES:
      return {
        ...state,
        microphones: action.payload.microphones,
      };

    case ADD_SPEAKER_DEVICES:
      return {
        ...state,
        speakers: action.payload.speakers,
      };

    case SET_MICROPHONE:
      console.log('reached here');
      return {
        ...state,
        microphone: action.payload.microphone,
      };

    case SET_SPEAKER:
      console.log('reached here');
      return {
        ...state,
        speaker: action.payload.speaker,
      };

    default:
      return state;
  }
}
