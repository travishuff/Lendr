const Sequelize = require('sequelize');

const sequelize = new Sequelize('lendrdb', 'travis', 'tron1k', {
host: 'localhost',
dialect: 'postgres'
});

// authenticating that the sequel connection was successfully created
sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

module.exports = sequelize;
