import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as deviceManagementActions from '../actions/deviceActions';
import { Dropdown } from '@fluentui/react';
import '../styles/sidebar.css';

const DeviceSettings = () => {
  const deviceStore = useSelector((state) => state.devices);
  const dispatch = useDispatch();
  const onChangeMicrophone = (event, option, index) => {
    dispatch(deviceManagementActions.SetMicrophone({ microphone: deviceStore.microphones[index] }));
  };
  const onChangeSpeaker = (event, option, index) => {
    dispatch(deviceManagementActions.SetSpeaker({ speaker: deviceStore.speakers[index] }));
  };
  return (
    <div className="sidebar call-sidebar">
      <div className="call-sidebar-heading sidebar-heading">Settings</div>
      <div className="sidebar-list">
        <h3 className="secondary-heading">Select Microphone</h3>
        <Dropdown
          placeholder={deviceStore.microphone ? deviceStore.microphone.name : 'Select a Microphone'}
          onChange={onChangeMicrophone}
          options={deviceStore.microphones.map((device) => {
            return {
              selected: false,
              key: device.id,
              text: device.name,
            };
          })}
        />
        <h3 className="secondary-heading">Select Speaker</h3>
        <Dropdown
          placeholder={deviceStore.speaker ? deviceStore.speaker.name : 'Select a Speaker'}
          onChange={onChangeSpeaker}
          options={deviceStore.speakers.map((device) => {
            return {
              selected: false,
              key: device.id,
              text: device.name,
            };
          })}
        />
      </div>
    </div>
  );
};

export default DeviceSettings;
