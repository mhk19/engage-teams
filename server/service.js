import User from './model.js';
import mongodb from 'mongodb';
import env from './env/env.js';
import { CommunicationIdentityClient } from '@azure/communication-identity';
import CommunicationUserIdentifier from '@azure/communication-common';

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
  let tokenResponse = await identityClient.getToken(identityResponse, ['voip']);
  res.json(tokenResponse.token);
};

export { getUsers, createUsers, getToken };
