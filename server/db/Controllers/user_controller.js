const sequelize = require('../database');
const cookieParser = require('cookie-parser');
const userSchema = require('../Models/user_model');

// creates the User table
let User = sequelize.define('user', userSchema);

// defines all of the funtions that will be executed on the User table
let userController = {
  //creates a user
  createUser: (req, res, next) => {
    sequelize.sync({ logging: console.log }).then(() => {
      User.create(req.body)
        .then(() => {
          res.cookie('username', req.body.username);
          res.status(200).end();
        })
        .catch((error) => {
          console.log('error:', error)
          res.status(400).end();
        });
    });
  },

  //gets a user for validation on login  
  getUser: (req, res, next) => {
    User.findOne({ where: { username: req.body.username } })
      .then((user) => {
        console.log('FOUND THE USER:');
        if (req.body.password === user.password) {
          console.log('FOUND THE USER PASSWORD:', req.body.password);
          res.cookie('username', user.username);
          res.status(200).end();
          // user will be the first entry of the User table with the username 'username' or null (if not exists)
          // user.username will contain the username of the User
        }
        else {
          console.log('DID NOT FIND THE USER PASSWORD');
          res.status(400).end();
        }
      })
      .catch((err) => {
        console.log('PROBLEM WITH GET-USER REQUEST');
        console.error(err);
        res.status(400).end();
      })
  }
}

module.exports = userController;