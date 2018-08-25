const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); //to access req.body
const mongoose = require('mongoose');
const UserController = require('./UserController.jsx');
const User = require('./UserModel.jsx');
mongoose.connect('mongodb://localhost/test');

//create express server
const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname + './../'));

// app.get('/cheese',(req, res) => {res.sendFile(path.join(__dirname, '../index2.html'))});
app.post('/login', UserController.checkUser, UserController.createUser)

app.get('/all', UserController.getAllUsers);

//create server routers
const router = require('./router');
router(app);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('connected to database'));

app.listen(3000, () => console.log('backend server up! this is run on port 3000, but visit 8080 for the dev server'))
