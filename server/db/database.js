const Sequelize = require('sequelize');

const sequelize = new Sequelize('lendrdb', 'travishuff', 'tron1k', {
  host: 'localhost',
  dialect: 'postgres'
});

// authenticating that the sequel connection was successfully created
sequelize
  .authenticate()
  .then(() => console.log('DB connection successful👾'))
  .catch((err) => console.error('DB connection unsuccessful:', err));

module.exports = sequelize;
