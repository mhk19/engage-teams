import User from './model.js';
import mongodb from 'mongodb';
import env from './env/env.js';
import { CommunicationIdentityClient } from '@azure/communication-identity';

const { ReadPreference } = mongodb;

const getUsers = (req, res) => {
  const { email } = req.body;
  const docquery = User.find({ email: email }).read(ReadPreference.NEAREST);
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
  const { email, password } = req.body;
  const docquery = User.find({ email: email, password: password }).read(ReadPreference.NEAREST);
  docquery
    .exec()
    .then((users) => {
      if (users.length === 0) res.status(401).send('Not Found');
      res.send(users[0].communicationUserId);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const createUsers = async (req, res) => {
  const { name, email, password } = req.body;
  const identityClient = new CommunicationIdentityClient(env.communicationString);
  let identityResponse = await identityClient.createUser();
  const communicationUserId = identityResponse.communicationUserId;
  const user = new User({ name, email, password, communicationUserId });
  user
    .save()
    .then(() => {
      res.json(user);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
};

const getToken = async (req, res) => {
  const { uid } = req.body;
  const identityClient = new CommunicationIdentityClient(env.communicationString);
  let identityResponse = { communicationUserId: uid };
  let tokenResponseCall = await identityClient.getToken(identityResponse, ['voip']);
  let tokenResponseChat = await identityClient.getToken(identityResponse, ['chat']);
  res.json({ call: tokenResponseCall, chat: tokenResponseChat });
};

export { getUsers, createUsers, getToken, login };
