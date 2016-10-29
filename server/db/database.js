const Sequelize = require('sequelize');
// const itemController = require('/item_controller');
// const userController = require('/user_controller');
// const requestController = require('/request_controller');

// setting up a sequel connection pool using postgres as the dialect 
const sequelize = new Sequelize('lendrdb', 'travishuff', 'tron1k', {
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
