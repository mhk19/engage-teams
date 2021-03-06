import User from './model.js';
import mongodb from 'mongodb';
import env from './env/env.js';
import { CommunicationIdentityClient } from '@azure/communication-identity';

const { ReadPreference } = mongodb;

const getUsers = (req, res) => {
  const docquery = User.find().read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const login = (req, res) => {
  const { email, password } = req.query;
  const docquery = User.find({ email: email, password: password }).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then((users) => {
      if (users.length === 0) res.json('Not found');
      else res.json(users[0].communicationUserId);
    })
    .catch((err) => {
      res.status(500).end();
    });
};

const createUsers = async (req, res) => {
  const { displayName, email, password } = req.body;
  const identityClient = new CommunicationIdentityClient(env.communicationString);
  let identityResponse = await identityClient.createUser();
  const communicationUserId = identityResponse.communicationUserId;
  const user = new User({ displayName, email, password, communicationUserId });
  user
    .save()
    .then(() => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getToken = async (req, res) => {
  const { uid } = req.query;
  const identityClient = new CommunicationIdentityClient(env.communicationString);
  let identityResponse = { communicationUserId: uid };
  let tokenResponseCall = await identityClient.getToken(identityResponse, ['voip']);
  let tokenResponseChat = await identityClient.getToken(identityResponse, ['chat']);
  let displayName;
  const docquery = User.find({ communicationUserId: uid }).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then((users) => {
      if (users.length === 0) res.status(401).end('Not found');
      else displayName = users[0].displayName;
    })
    .catch((err) => {
      res.status(500).end();
    });
  res.json({ call: tokenResponseCall, chat: tokenResponseChat, displayName: displayName });
};

const addGroup = async (req, res) => {
  const { uid, remoteUID, groupID, threadID } = req.body;
  const docquery = User.find({ communicationUserId: uid }).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then(async (users) => {
      const groups = users[0].groups;
      groups.push({ remoteUID: remoteUID, groupID: groupID, threadID: threadID });
      users[0].groups = groups;
      await users[0].save();
    })
    .catch((err) => {
      res.status(500).end();
    });
  const docquery2 = User.find({ communicationUserId: remoteUID }).read(ReadPreference.NEAREST);
  docquery2
    .exec()
    .then(async (users) => {
      const groups = users[0].groups;
      groups.push({ remoteUID: uid, groupID: groupID, threadID: threadID });
      users[0].groups = groups;
      await users[0].save();
    })
    .catch((err) => {
      res.status(500).end();
    });
  res.status(200).json({});
};

const findGroup = async (req, res) => {
  const { uid, remoteUID } = req.query;
  const docquery = User.find({
    communicationUserId: uid,
    groups: { $elemMatch: { remoteUID: remoteUID } },
  });
  docquery
    .exec()
    .then((users) => {
      if (users.length !== 0) {
        const groups = users[0].groups;
        groups.forEach((group) => {
          if (group.remoteUID === remoteUID) res.status(200).json(group);
        });
      } else {
        res.status(200).json([]);
      }
    })
    .catch((err) => {
      res.status(500).end();
    });
};

export { getUsers, createUsers, getToken, login, addGroup, findGroup };
