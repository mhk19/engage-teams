import React from 'react';
import { useSelector } from 'react-redux';
import { ParticipantItem, ParticipantList } from '@azure/communication-react';
import { Stack } from '@fluentui/react';
import '../styles/sidebar.css';
import PropTypes from 'prop-types';

const Participants = (props) => {
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
    <div className={`${props.type}-sidebar sidebar`}>
      <div className={`${props.type}-sidebar-heading sidebar-heading`}>
        {props.type === 'home' ? 'Users' : 'Participants'}
      </div>
      <div className="sidebar-list">
        <Stack>
          <ParticipantList
            participants={participantStore.participants}
            onRenderParticipant={onRenderParticipant}
          />
        </Stack>
      </div>
    </div>
  );
};

export default Participants;

Participants.propTypes = {
  type: PropTypes.string,
};
