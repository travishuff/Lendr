const Sequelize = require('sequelize');
const itemController = require('/item_controller');
const userController = require('/user_controller');
const requestController = require('/request_controller');

// setting up a sequel connection pool using postgres as the dialect
const sequelize = new Sequelize('database.js', 'AndresOlivero', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

// defining models for all three needed tables: Items, Users, and Requests,
// pulling the schemas from the controller file
let Item = sequelize.define('item', itemController.itemSchema);
let User = sequelize.define('user', userController.userSchema);
let Request = sequelize.define('request', requestContoller.requestSchema);


// exporting the function that will sync whichever model was input from the user. 
module.exports = function (data) {

  let item = {};
  let user = {};
  let request = {};

  for (let action in data) {
    if (action === 'item') {
      item = data[action];
      sequelize.sync({ logging: console.log }).then(() => {
        Item.create(item, { validate: true }).catch(function (errors) { console.log('error:', errors) });
      });

    }
    if (action === 'user') {
      user = data[action];
      sequelize.sync({ logging: console.log }).then(() => {
        User.create(user, { validate: true }).catch(function (errors) { console.log('error:', errors) });
      });
    }
    if (action === 'request') {
      request = data[action];
      sequelize.sync({ logging: console.log }).then(() => {
        Request.create(request, { validate: true }).catch(function (errors) { console.log('error:', errors) });
      });
    }
  }
}

