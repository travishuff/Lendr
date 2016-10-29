const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const request = require('request');
const dbFunctions = require('./db/database');

/////////////////////////////////////////
// Import middleware here
const { createUser, getUser } = require('./db/Controllers/user_controller');

/////////////////////////////////////////
// Initialize your express server
const app = express();

/////////////////////////////////////////
// Parser middleware
app.use(express.static(__dirname + './../client/img'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());




/////////////////////////////////////////
// GET Requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/client/stylesheets/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/stylesheets/styles.css'))
})

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../bundle.js'))
})

/////////////////////////////////////////
// POST Requests
app.post('/signup', createUser)
app.post('/login', getUser)






app.listen(3000, () => {
  console.log('server up and running on 3000');
});