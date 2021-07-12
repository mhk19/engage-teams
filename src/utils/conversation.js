import { getGroup, addGroup } from '../api/userApi';
import { v4 as uuidv4 } from 'uuid';

export async function CreateConversation(
  uid,
  displayName,
  remoteUID,
  remotedisplayName,
  chatClientRef,
) {
  const group = await getGroup(uid, remoteUID);
  if (group.length !== 0) return group;
  else {
    const createChatThreadRequest = {
      topic: 'Meeting Chat',
    };

    const createChatThreadOptions = {
      participants: [
        {
          id: {
            communicationUserId: uid,
          },
          displayName: displayName,
        },
        {
          id: {
            communicationUserId: remoteUID,
          },
          displayName: remotedisplayName,
        },
      ],
    };
    const createChatThreadResult = await chatClientRef.createChatThread(
      createChatThreadRequest,
      createChatThreadOptions,
    );
    const threadID = createChatThreadResult.chatThread.id;
    const groupID = uuidv4();
    await addGroup(uid, remoteUID, groupID, threadID);
    return {
      remoteUID: remoteUID,
      threadID: threadID,
      groupID: groupID,
    };
  }
}
