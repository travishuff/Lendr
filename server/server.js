const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const request = require('request');
const session = require('express-session');
const bcrypt = require('bcrypt');

const { createUser, getUser } = require('./db/Controllers/user_controller');
const { createItem, getAllItems, getAllOwnerItems, getAllLendeeItems, borrowItem, deleteItem } = require('./db/Controllers/item_controller');
const { createRequest, getWishlist, getOpenRequests, deleteRequest } = require('./db/Controllers/request_controller');
const {isLoggedIn, checkSession} = require('./db/Controllers/session_controller');
const {sessionSchema} = require('./db/Models/sessions.js');

const app = express();

/////////////////////////////////////////
// Parser middleware
// app.use(express.static(path.join(__dirname, '../client/components')));
app.use(express.static(__dirname + './../client/img'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
      cookieName: 'session',
      secret: 'random_string_goes_here',
      duration: 30 * 60 * 1000,
      activeDuration: 5 * 60 * 1000,
    }));



/////////////////////////////////////////
// GET Requests
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
});
app.get('/client/stylesheets/styles.css', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/stylesheets/styles.css'))
});
app.get('/bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, '../bundle.js'))
});
app.get('/browse', getAllItems);
app.get('/requested', getOpenRequests);
app.get('/wishlist', getWishlist);

/////////////////////////////////////////
// POST Requests
app.post('/signup', createUser, isLoggedIn);
app.post('/login', getUser, checkSession)
app.post('/uploadItem', createItem);
app.post('/borrowItem', borrowItem);
app.post('/deleteItem', deleteItem);
app.post('/makeRequest', createRequest);
app.post('/userInfo', getAllItems);

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../index.html'))
// });


app.listen(3000, () => {
  console.log('server up and running on 3000');
});
