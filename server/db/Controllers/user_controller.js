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

  verifyUser: function (userId) {
    User.findById(userId).then(function (user) {
      //** do we want to use userId or username????
        // if username, this will be the code: 
          // User.findOne({
            //   where: {username: username},
            // }).then(function(user) {
            //   // user will be the first entry of the Projects table with the title 'aProject' || null
            //   // user.username will contain the name of the project
            // })
      // user will be an instance of User and stores the content of the table entry
      // with id 'userId. if such an entry is not defined you will get null
      console.log(user);
    })
  }
}

module.exports = userController;