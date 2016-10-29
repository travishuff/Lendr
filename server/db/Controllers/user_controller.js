const sequelize = require('../database');
const userSchema = require('../Models/user_model');

// creates the User table
let User = sequelize.define('user', userSchema);

// defines all of the funtions that will be executed on the User table
let userController = {
  createUser: (req, res, next) => {
    sequelize.sync({ logging: console.log }).then(() => {
      User.create(req.body)
        .then(() => {
          res.status(200).end();
        })
        .catch((error) => {
          console.log('error:', error)
          res.status(400).end();
        });
    });
    // User.create(req.body)
    //   .then(() => {
    //     res.end(200);
    //   })
    //   .catch((error) => {
    //     console.log('error:', error)
    //     res.end(400);
    //   });
  },

  getUser: (req, res, next) => {
    User.findOne({ where: { username: req.body.username } })
      .then((user) => {
        res.status(200).end();
        // user will be the first entry of the User table with the username 'username' or null (if not exists)
        // user.username will contain the username of the User
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).end()
      })
  }
}

module.exports = userController;