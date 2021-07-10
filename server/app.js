import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { getUsers, createUsers, getToken, login, addGroup, findGroup } from './service.js';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
var __dirname = process.cwd();
const path = __dirname + '/views/';
app.use(express.static(path));

var corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/users', (req, res) => {
  getUsers(req, res);
});

app.put('/user', (req, res) => {
  createUsers(req, res);
});

app.get('/token', (req, res) => {
  getToken(req, res);
});

app.get('/login', (req, res) => {
  login(req, res);
});

app.post('/addGroup', (req, res) => {
  addGroup(req, res);
});

app.get('/findGroup', (req, res) => {
  findGroup(req, res);
});

export default app;
