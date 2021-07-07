// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// This is some mock messages for example purposes.
// For actual projects, you can get chat messages from declarative/selectors for ACS.
const GetHistoryChatMessages = () => {
  console.log('hello');
  return [
    {
      type: 'chat',
      payload: {
        senderId: 'user1',
        senderDisplayName: 'Kat Larsson',
        messageId: Math.random().toString(),
        content: 'Hi everyone, I created this awesome group chat for us!',
        mine: true,
        attached: false,
        type: 'text',
      },
    },
    {
      type: 'chat',
      payload: {
        senderId: 'user2',
        senderDisplayName: 'Robert Tolbert',
        messageId: Math.random().toString(),
        content: 'Nice! This looks great!',
        mine: false,
        attached: false,
        type: 'text',
      },
    },
    {
      type: 'chat',
      payload: {
        senderId: 'user3',
        senderDisplayName: 'Carole Poland',
        messageId: Math.random().toString(),
        content: "Yeah agree, let's chat here from now on!",
        mine: false,
        attached: false,
        type: 'text',
      },
    },
    {
      type: 'chat',
      payload: {
        senderId: 'user1',
        senderDisplayName: 'Kat Larsson',
        messageId: Math.random().toString(),
        content: 'Hi everyone, I created this awesome group chat for us!',
        mine: true,
        attached: false,
        type: 'text',
      },
    },
    {
      type: 'chat',
      payload: {
        senderId: 'user2',
        senderDisplayName: 'Robert Tolbert',
        messageId: Math.random().toString(),
        content: 'Nice! This looks great!',
        mine: false,
        attached: false,
        type: 'text',
      },
    },
    {
      type: 'chat',
      payload: {
        senderId: 'user3',
        senderDisplayName: 'Carole Poland',
        messageId: Math.random().toString(),
        content: "Yeah agree, let's chat here from now on!",
        mine: false,
        attached: false,
        type: 'text',
      },
    },
    {
      type: 'chat',
      payload: {
        senderId: 'user1',
        senderDisplayName: 'Kat Larsson',
        messageId: Math.random().toString(),
        content: 'Hi everyone, I created this awesome group chat for us!',
        mine: true,
        attached: false,
        type: 'text',
      },
    },
    {
      type: 'chat',
      payload: {
        senderId: 'user2',
        senderDisplayName: 'Robert Tolbert',
        messageId: Math.random().toString(),
        content: 'Nice! This looks great!',
        mine: false,
        attached: false,
        type: 'text',
      },
    },
    {
      type: 'chat',
      payload: {
        senderId: 'user3',
        senderDisplayName: 'Carole Poland',
        messageId: Math.random().toString(),
        content: "Yeah agree, let's chat here from now on!",
        mine: false,
        attached: false,
        type: 'text',
      },
    },
    {
      type: 'chat',
      payload: {
        senderId: 'user1',
        senderDisplayName: 'Kat Larsson',
        messageId: Math.random().toString(),
        content: 'Hi everyone, I created this awesome group chat for us!',
        mine: true,
        attached: false,
        type: 'text',
      },
    },
    {
      type: 'chat',
      payload: {
        senderId: 'user2',
        senderDisplayName: 'Robert Tolbert',
        messageId: Math.random().toString(),
        content: 'Nice! This looks great!',
        mine: false,
        attached: false,
        type: 'text',
      },
    },
    {
      type: 'chat',
      payload: {
        senderId: 'user3',
        senderDisplayName: 'Carole Poland',
        messageId: Math.random().toString(),
        content: "Yeah agree, let's chat here from now on!",
        mine: false,
        attached: false,
        type: 'text',
      },
    },
  ];
};

export default GetHistoryChatMessages;

// export const GetHistoryWithSystemMessages = (): (SystemMessage | ChatMessage)[] => {
//   return [
//     ...GetHistoryChatMessages(),
//     {
//       type: 'system',
//       payload: {
//         messageId: Math.random().toString(),
//         iconName: 'PeopleAdd',
//         content: 'Miguel Garcia is added to the chat'
//       }
//     }
//   ];
// };

// export const GetHistoryWithCustomMessages = (): (CustomMessage | ChatMessage)[] => {
//   return [
//     {
//       type: 'custom',
//       // Custom message's payload can be any shape, this is just an example.
//       // Whatever is defined in the custom message's payload needs to be handled in onRenderMessage in MessageThread.
//       payload: {
//         messageId: Math.random().toString(),
//         content: 'Today'
//       }
//     },
//     ...GetHistoryChatMessages()
//   ];
// };

// // This is some mock avatars for example purposes.
// export const GetAvatarUrlByUserId = (userId: string): string => {
//   switch (userId) {
//     case 'user1':
//       return 'images/avatars/avatar-1.jpg';
//     case 'user2':
//       return 'images/avatars/avatar-2.jpg';
//     case 'user3':
//       return 'images/avatars/avatar-8.jpg';
//     default:
//       return '';
//   }
// };
