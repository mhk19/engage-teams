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
  const navStore = useSelector((state) => state.navigation);

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
    console.log(navStore.isHome);
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
            createdOn: message.createdOn,
          },
        };
        dispatch(threadActions.AddMessageFront({ message: msg }));
      }
      console.log(message);
    }
  };

  useEffect(() => {
    console.log(thread.threadId);
    dispatch(threadActions.ResetThread());
    initialiseThread();
    // eslint-disable-next-line
  }, [homeStore]);
  const msgThreadStyles = {
    chatContainer: {
      backgroundColor: 'rgba(22, 135, 167, 0.15)',
      height: '100%',
      width: '100%',
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
      background: '#fcfdfd',
      border: 'none',
      borderRadius: '0 0 0 0.75rem',
      height: '2.5rem',
      border: '1px solid rgba(22, 135, 167, 0.15)',
    },
    sendMessageIconContainer: {
      background: '#fcfdfd',
      borderRadius: '0 0 0.75rem 0',
      border: '1px solid rgba(22, 135, 167, 0.15)',
    },
  };

  return (
    <FluentThemeProvider>
      <div className="chat">
        <MessageThread
          styles={msgThreadStyles}
          messages={thread.messages}
        />
      </div>
      <SendBox styles={sendBoxStyles} onSendMessage={sendMessage} />
    </FluentThemeProvider>
  );
};

export default MessageContainer;

MessageContainer.propTypes = {
  type: PropTypes.string,
};
