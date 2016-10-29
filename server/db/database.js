const Sequelize = require('sequelize');
const itemController = require('/item_controller');
const userController = require('/user_controller');
const requestController = require('/request_controller');

// setting up a sequel connection pool using postgres as the dialect 
const sequelize = new Sequelize('database.js', 'AndresOlivero', 'password', {
  //what gets added as username and password??
  host: 'localhost',
  dialect: 'postgres'
});
// authenticating that the sequel connection was successfully created
sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

// exporting the function that perform actions based on the input request data
module.exports = function (data) {

  for (let action in data) {
    if (action === 'createItem') {
      // data[action] should be equal to obj with all props that an item takes
      itemController.createItem(data[action]);
    }
    if (action === 'createUser') {
      // data[action] should be equal to obj with all props that a user takes
      userController.createUser(data[action]);
    }
    if (action === 'createRequest') {
      // data[action] should be equal to obj with all props that a request takes
      requestController.createRequest(data[action]);
    }
    if (action === 'verifyUser') {
      // data[action] should be equal to a string that equals a user's username or userId??
      userController.verifyUser(data[action]);
    }
    if (action === 'getWishlist') {
      // data[action] should be equal to a string that equals a user's username or userId??
      requestController.getWishlist(data[action]);
    }
  }
}

