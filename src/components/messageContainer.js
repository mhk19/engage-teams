import React from 'react';
import { FluentThemeProvider, MessageThread, SendBox } from '@azure/communication-react';
import GetHistoryChatMessages from './placeholdermessages';
import '../styles/sidebar.css';

const MessageContainer = () => {
  // const userToken =
  //   'eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwMiIsIng1dCI6IjNNSnZRYzhrWVNLd1hqbEIySmx6NTRQVzNBYyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOmVjZTY2ZjY5LTEwMWQtNDVhYi05OTBjLTk2NDE1MjU1M2U2YV8wMDAwMDAwYi0xYzBhLWJkZjAtZjQwZi0zNDNhMGQwMDZhODgiLCJzY3AiOjE3OTIsImNzaSI6IjE2MjU1ODA3MDYiLCJleHAiOjE2MjU2NjcxMDYsImFjc1Njb3BlIjoidm9pcCIsInJlc291cmNlSWQiOiJlY2U2NmY2OS0xMDFkLTQ1YWItOTkwYy05NjQxNTI1NTNlNmEiLCJpYXQiOjE2MjU1ODA3MDZ9.MxaxIKFr7Ej8X11uZbxJZcERXRnc0vclPk-LG5IAXuatiGD8gTZv9T0ld10yHxkNMw5E_qMz8aXR40Soq7Ufz2q99p6hyL9ekRrVrOmSIGA-xy5kZd1NEjl5UXnlzM6Vavxd0ui1QpGINc8dSGSRx5yekuB7XzbK_6v2PKvlu0xhZjkApXAOxu_SX2CqzNOVD21RUxmTvudbb7K-iJCHDpP1mfpNCO6jBRKViFRVg3MN0K_UKbQ0pxtISFF7vdAG3z6OW3U27jc1mI-a5-AayDVb7YR1yJRcJ5Kcu9J8RheefhgD7PeAnL6AeD3pVkILtcd7I_V6vXJI-8LmQ96XpA';
  // let chatClient = new ChatClient(
  //   env.endpointUrl,
  //   new AzureCommunicationTokenCredential(userToken),
  // );
  // const createChatThread = async () => {
  //   const createChatThreadRequest = {
  //     topic: 'Meeting Chat',
  //   };

  //   const createChatThreadOptions = {
  //     participants: [
  //       {
  //         id: {
  //           communicationUserId:
  //             '8:acs:ece66f69-101d-45ab-990c-964152553e6a_0000000b-2063-60ac-47b4-a43a0d00c96b',
  //         },
  //         displayName: 'Mahak',
  //       },
  //     ],
  //   };
  //   const createChatThreadResult = await chatClient.createChatThread(
  //     createChatThreadRequest,
  //     createChatThreadOptions,
  //   );
  //   const threadId = createChatThreadResult.chatThread.id;
  //   return threadId;
  // };

  // useEffect(() => {
  //   createChatThread().then(async (threadId) => {
  //     console.log(threadId);
  //     let chatThreadClient = chatClient.getChatThreadClient(threadId);
  //     const sendMessageRequest = {
  //       content: 'Hey there! I am Mahak',
  //     };
  //     let sendMessageOptions = {
  //       senderDisplayName: 'Mahak',
  //       type: 'text',
  //     };
  //     const sendChatMessageResult = await chatThreadClient.sendMessage(
  //       sendMessageRequest,
  //       sendMessageOptions,
  //     );
  //     const messageId = sendChatMessageResult.id;
  //     console.log(`Message sent!, message id:${messageId}`);
  //     const messages = chatThreadClient.listMessages();
  //     for await (const message of messages) {
  //       console.log(message);
  //     }
  //   });
  // });
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
    <div className="sidebar">
      <FluentThemeProvider>
        <div className="sidebar-heading">Chat</div>
        <div className="chat">
          <MessageThread
            userId={'1'}
            styles={msgThreadStyles}
            messages={GetHistoryChatMessages}
            showMessageDate={false}
          />
        </div>
        <SendBox styles={sendBoxStyles} />
      </FluentThemeProvider>
    </div>
  );
};

export default MessageContainer;
