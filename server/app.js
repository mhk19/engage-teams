import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { getUsers, createUsers, getToken, login } from './service.js';
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
 	console.log('request received');
	res.send('hello');
});

app.get('/user', (req, res) => {
  console.log('request in users');
  getUsers(req, res);
});

app.put('/user', (req, res) => {
  createUsers(req, res);
});

app.get('/token', (req, res) => {
  console.log('request in token');
  getToken(req, res);
});

app.get('/login', (req, res) => {
	console.log('request received in login')
  login(req, res);
});

export default app;
