const sequelize = require('../database');
const userSchema = require('../Models/user_model');
const sessionSchema = require('../Models/sessions.js');

const bcrypt = require('bcrypt');
const saltRounds = 10;

// creates the User table
const User = sequelize.define('user', userSchema);
const sessions = sequelize.define('sessions', sessionSchema);

const userController = {
  createUser: (req, res, next) => {
    console.log(req.body);
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      if (err) {
        console.error(`Error hashing password: ${err}`);
      } else {
        req.body.password = hash; // Store hash in your password DB.
        res.cookie('ssid', Math.floor(Math.random() * 2132131231) + 1);
        res.cookie('username', req.body.username);
      }
    });
    sequelize.sync()
    .then(() => {
      User.create(req.body)
        .then(results => next())
        .catch((error) => {
          console.error(`Error on Create New User: ${error.message}`);
          res.status(400).end();
        });
    })
    .catch((error) => {
      console.error(`Error on DB Sync: ${error.message}`);
      res.status(400).end();
    });
  },

  getUser: (req, res, next) => {
    console.log('GET USER');
    sessions.find({
      where: {
        ssid: req.body.ssid
      }
    })
    .then(user => {
      if (user) {
        console.log('USER SESSION FOUND');
        res.cookie('username', user.username);
      }
      if (!user) {
        console.log('USER SESSION NOT FOUND');
        User.findOne({
          where: {
            username: req.body.username
          }
        })
        .then(user => {
          if (!user) {
            console.log('USER NOT FOUND');
            return res.status(400).send('no user is the db');
          }
          if (user) {
            console.log('USER FOUND');
            bcrypt.compare(req.body.password, user.dataValues.password, (err, val) => {
              req.session.user = user.dataValues.username;
              res.cookie('ssid', Math.floor(Math.random() * 2132131231) + 1); //Generate cookie
              res.cookie('username', user.username);
              req.session.save(() => {
                console.log('SAVING SESSION');
                next();
              });
              if (val === false) res.status(400).end();
              else next();
            })
          }
        })
        .catch(err => res.status(400).end());
      }
    })
    // .catch(err => res.status(400).send(err))
    .catch(error => {
      console.error(`Error on SESSIONS lookup: ${error.message}`);
      res.status(400).end();
    });
  }
}

module.exports = userController;
