import React from 'react';
import { useRef } from 'react';
import { VideoStreamRenderer } from '@azure/communication-calling';

const RemoteMedia = (props) => {
  const remoteRendererViewRef = useRef();
  const renderRemoteVideoStream = async () => {
    console.log('reached here', props.remoteParticipants);
    let stream;
    if (props.remoteParticipants.length !== 0) stream = props.remoteParticipants[0].videoStreams[0];
    if (stream && stream.isAvailable) {
      console.log('reached here 2', stream);
      const renderer = new VideoStreamRenderer(stream);
      remoteRendererViewRef.current = await renderer.createView({ scalingMode: 'Fit' });
      const container = document.getElementById('remote-video');
      container.appendChild(remoteRendererViewRef.current.target);
    }
  };
  renderRemoteVideoStream();
  return <div id="remote-video"></div>;
};

export default RemoteMedia;
