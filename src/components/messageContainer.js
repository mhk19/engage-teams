import React, { useEffect, useRef } from 'react';
import { FluentThemeProvider, MessageThread, SendBox } from '@azure/communication-react';
import '../styles/sidebar.css';
import { ChatClient } from '@azure/communication-chat';
import { AzureCommunicationTokenCredential } from '@azure/communication-common';
import env from '../env/env';
import { useDispatch, useSelector } from 'react-redux';
import * as threadActions from '../actions/threadActions';

const MessageContainer = () => {
  const chatThreadClientRef = useRef();
  const localVideoUser = useSelector((state) => state.localVideoUser);
  const thread = useSelector((state) => state.thread);
  const dispatch = useDispatch();
  const userToken = env.chatToken;
  let chatClient = new ChatClient(
    env.endpointUrl,
    new AzureCommunicationTokenCredential(userToken),
  );
  const createChatThread = async () => {
    const createChatThreadRequest = {
      topic: 'Meeting Chat',
    };

    const createChatThreadOptions = {
      participants: [
        {
          id: {
            communicationUserId:
              '8:acs:ece66f69-101d-45ab-990c-964152553e6a_0000000b-26b8-7380-6a0b-343a0d001cc3',
          },
          displayName: 'Mahak',
        },
      ],
    };
    const createChatThreadResult = await chatClient.createChatThread(
      createChatThreadRequest,
      createChatThreadOptions,
    );
    const threadId = createChatThreadResult.chatThread.id;
    return threadId;
  };

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

  useEffect(() => {
    createChatThread().then(async (threadId) => {
      console.log(threadId);
      let chatThreadClient = chatClient.getChatThreadClient(threadId);
      chatThreadClientRef.current = chatThreadClient;
      const addParticipantsRequest = {
        participants: [
          {
            id: {
              communicationUserId:
                '8:acs:ece66f69-101d-45ab-990c-964152553e6a_0000000b-2504-1949-ac00-343a0d0024b3',
            },
            displayName: 'Jane',
          },
        ],
      };
      await chatThreadClient.addParticipants(addParticipantsRequest);
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
          dispatch(threadActions.AddMessage({ message: msg }));
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
    });
    // eslint-disable-next-line
  }, [chatClient]);
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
    <div className="call-sidebar">
      <FluentThemeProvider>
        <div className="sidebar-heading">Chat</div>
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
