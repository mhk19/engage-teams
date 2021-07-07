import mongoose from 'mongoose';
import env from './env/env.js';

mongoose.Promise = global.Promise;

const mongoUri = `mongodb://${env.dbName}.mongo.cosmos.azure.com:${env.port}/?ssl=true&appName=@${env.dbName}@`;

const connect = () => {
  return mongoose.connect(mongoUri, {
    auth: {
      user: env.dbName,
      password: env.key,
    },
  });
};

export { connect, mongoose };
