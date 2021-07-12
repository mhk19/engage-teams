import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ParticipantItem, ParticipantList } from '@azure/communication-react';
import '../styles/sidebar.css';
import PropTypes from 'prop-types';
import { CreateConversation } from '../utils/conversation';
import { SetSelectedUser } from '../actions/homeActions';
import * as threadActions from '../actions/threadActions';

const Participants = (props) => {
  const participantStore = useSelector((state) => state.participantList);
  const localStore = useSelector((state) => state.localVideoUser);
  const dispatch = useDispatch();

  const participantStyle = {
    root: {
      backgroundColor: 'white',
      height: 'max-content',
      width: '25rem',
      borderRadius: '0.5rem',
      marginTop: '1rem',
      color: '#1687A7',
      alignItems: 'center',
      padding: '0.5rem',
    },
  };

  const handleUserClick = (participant) => {
    if (props.type === 'home') {
      dispatch(threadActions.ResetThread());
      CreateConversation(
        localStore.userId,
        localStore.displayName,
        participant.userId,
        participant.displayName,
        localStore.chatClientRef,
      )
        .then((group) => {
          dispatch(
            SetSelectedUser({
              remoteUID: group.remoteUID,
              threadId: group.threadID,
              groupId: group.groupID,
            }),
          );
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onRenderParticipant = (participant) => {
    return (
      <div
        onClick={() => {
          handleUserClick(participant);
        }}
      >
        <ParticipantItem displayName={participant.displayName} styles={participantStyle} />{' '}
      </div>
    );
  };

  return (
    <div className={`${props.type}-sidebar sidebar`}>
      <div className={`${props.type}-sidebar-heading sidebar-heading`}>
        {props.type === 'home' ? 'Users' : 'Participants'}
      </div>
      <div className={`${props.type}-sidebar-list sidebar-list`}>
        <ParticipantList
          participants={participantStore.participants}
          onRenderParticipant={onRenderParticipant}
        />
      </div>
    </div>
  );
};

export default Participants;

Participants.propTypes = {
  type: PropTypes.string,
};
