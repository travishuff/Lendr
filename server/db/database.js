const Sequelize = require('sequelize');
// const itemController = require('/item_controller');
// const userController = require('/user_controller');
// const requestController = require('/request_controller');

// setting up a sequel connection pool using postgres as the dialect 
const sequelize = new Sequelize('lendrdb', 'AndresOlivero', 'wheretheredferngrows', {
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

module.exports = sequelize;

// exporting the function that perform actions based on the input request data
// module.exports = function (data) {

//   for (let action in data) {
//     if (action === 'createItem') {
//       // data[action] should be equal to obj with all props that an item takes
//       itemController.createItem(data[action]);
//     }
//     else if (action === 'createUser') {
//       // data[action] should be equal to obj with all props that a user takes
//       userController.createUser(data[action]);
//     }
//     else if (action === 'createRequest') {
//       // data[action] should be equal to obj with all props that a request takes
//       requestController.createRequest(data[action]);
//     }
//     else if (action === 'verifyUser' || action === 'getUserKarma') {
//       // data[action] should be equal to a string that equals a user's username or userId??
//       userController.getUser(data[action]);
//     }
//     else if (action === 'getWishlist') {
//       // data[action] should be equal to a string that equals a user's username or userId??
//       requestController.getWishlist(data[action]);
//     }
//     else if (action === 'getOpenRequests') {
//       requestController.getOpenRequests();
//     }
//     else if (action === 'getAllItems') {
//       requestController.getAllItems();
//     }
//     else if (action === 'getAllOwnerItems') {
//       //data[action] should be equal to the owner username
//       itemController.getAllOwnerItems(data[action]);
//     }
//     else if (action === 'getAllLendeeItems') {
//       //data[action] should be equal to the lendee username
//       itemController.getAllLendeeItems(data[action]);
//     }
//     else if (action === 'deleteItem') {
//       // data[action] should be equal to the owner username and item name --> [username, itemname]
//       itemController.deleteItem(data[action]);
//     }
//     else if (action === 'deleteRequest') {
//       // data[action] should be equal to the lendee username and the item name --> [username, itemname]
//       requestController.deleteRequest(data[action]);
//     }
//     else console.log('incorrect database action');
//   }
// }

