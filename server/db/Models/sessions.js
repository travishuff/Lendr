const Sequelize = require('sequelize');

sessionSchema = {
  ssid: {
    type: Sequelize.STRING,
    allowNull:false
  },
  username: {
    type: Sequelize.STRING,
    allowNull:false
  },
};

module.exports = sessionSchema;
