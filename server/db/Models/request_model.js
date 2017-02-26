const Sequelize = require('sequelize');

requestSchema = {
  lendeename: {
    type: Sequelize.STRING,
  },
  itemname: {
    type: Sequelize.STRING,
  },
  note: {
    type: Sequelize.STRING,
  }
};

module.exports = requestSchema;
