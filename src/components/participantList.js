import React from 'react';
import { useSelector } from 'react-redux';
import { ParticipantItem, ParticipantList } from '@azure/communication-react';
import { Stack } from '@fluentui/react';
import '../styles/sidebar.css';

const Participants = () => {
  const participantStore = useSelector((state) => state.participantList);

  const participantStyle = {
    root: {
      backgroundColor: 'white',
      height: '2.5rem',
      width: '20rem',
      borderRadius: '0.5rem',
      marginTop: '1rem',
      color: '#1687A7',
      alignItems: 'center',
      padding: '0.5rem',
    },
  };

  const onRenderParticipant = (participant) => {
    return <ParticipantItem displayName={participant.displayName} styles={participantStyle} />;
  };

  return (
    <div className="sidebar">
      <Stack>
        <div className="sidebar-heading">Participants</div>
        <div className="list">
          <ParticipantList
            participants={participantStore.participants}
            onRenderParticipant={onRenderParticipant}
          />
        </div>
      </Stack>
    </div>
  );
};

export default Participants;
