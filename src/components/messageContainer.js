import React, { useEffect, useRef } from 'react';
import { FluentThemeProvider, MessageThread, SendBox } from '@azure/communication-react';
import '../styles/sidebar.css';
import { useDispatch, useSelector } from 'react-redux';
import * as threadActions from '../actions/threadActions';
import PropTypes from 'prop-types';

const MessageContainer = (props) => {
  const chatThreadClientRef = useRef();
  const localVideoUser = useSelector((state) => state.localVideoUser);
  const thread = useSelector((state) => state.thread);
  const dispatch = useDispatch();
  const homeStore = useSelector((state) => state.home);

  const sendMessage = async (content) => {
    const sendMessageRequest = {
      content: content,
    };
    let sendMessageOptions = {
      senderDisplayName: localVideoUser.displayName,
      type: 'text',
    };
    const sendChatMessageResult = await chatThreadClientRef.current.sendMessage(
      sendMessageRequest,
      sendMessageOptions,
    );
    const messageId = sendChatMessageResult.id;
    console.log(`Message sent!, message id:${messageId}`);
  };

  const initialiseThread = async () => {
    const chatClient = localVideoUser.chatClientRef.current;
    let chatThreadClient = chatClient.getChatThreadClient(homeStore.threadId);
    chatThreadClientRef.current = chatThreadClient;
    const messages = chatThreadClient.listMessages();
    for await (const message of messages) {
      if (message.type === 'text') {
        const msg = {
          type: 'chat',
          payload: {
            senderId: message.sender.communicationUserId,
            senderDisplayName: message.senderDisplayName,
            messageId: message.id,
            content: message.content.message,
            attached: false,
            type: 'text',
          },
        };
        dispatch(threadActions.AddMessageFront({ message: msg }));
      }
      console.log(message);
    }
    await chatClient.startRealtimeNotifications();
    chatClient.on('chatMessageReceived', (e) => {
      console.log('Notification chatMessageReceived!', e);
      if (e.type === 'Text') {
        const msg = {
          type: 'chat',
          payload: {
            senderId: e.sender.communicationUserId,
            senderDisplayName: e.senderDisplayName,
            messageId: e.id,
            content: e.message,
            attached: false,
            type: 'text',
          },
        };
        dispatch(threadActions.AddMessage({ message: msg }));
        console.log(thread.messages);
      }
    });
  };

  useEffect(() => {
    initialiseThread();
    // eslint-disable-next-line
  }, []);
  const msgThreadStyles = {
    chatContainer: {
      backgroundColor: 'rgba(22, 135, 167, 0.15)',
      height: '32.5rem',
      width: '25rem',
      marginTop: '3.5rem',
      overflowY: 'scroll',
      overflowX: 'hidden',
    },
    chatMessageContainer: {
      width: '19rem',
      textAlign: 'left',
    },
  };

  const sendBoxStyles = {
    textField: {
      background: '#F4F9F9',
      border: 'none',
      borderRadius: '0 0 0 0.75rem',
      height: '2.5rem',
    },
    sendMessageIconContainer: {
      background: '#F4F9F9',
      borderRadius: '0 0 0.75rem 0',
    },
  };

  return (
    <div className={`${props.type}-message-sidebar message-sidebar`}>
      <FluentThemeProvider>
        <div className={`${props.type}-sidebar-heading sidebar-heading`}>Chat</div>
        <div className="chat">
          <MessageThread
            userId={'1'}
            styles={msgThreadStyles}
            messages={thread.messages}
            showMessageDate={false}
          />
        </div>
        <SendBox styles={sendBoxStyles} onSendMessage={sendMessage} />
      </FluentThemeProvider>
    </div>
  );
};

export default MessageContainer;

MessageContainer.propTypes = {
  type: PropTypes.string,
};
