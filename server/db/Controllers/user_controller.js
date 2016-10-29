const Sequelize = require('sequelize');
const userSchema = require('../Models/user_model');

// creates the User table
let User = sequelize.define('user', userSchema);

// defines all of the funtions that will be executed on the User table
let userController = {
  createUser: function (user) {
    sequelize.sync({ logging: console.log }).then(() => {
        User.create(user, { validate: true }).catch(function (errors) { console.log('error:', errors) });
    });
  },

  verifyUser: function (username) { 
    User.findOne({ where: {username: username}}).then(function(user) {
        // user will be the first entry of the User table with the username 'username' or null (if not exists)
        // user.username will contain the username of the User
      console.log(user);
    })
  }
  
}

module.exports = userController;