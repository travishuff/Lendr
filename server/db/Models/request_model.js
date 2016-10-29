// defining the request schema

requestSchema = {
  lendeename: {
    type: Sequelize.STRING
  },
  itemname: {
    type: Sequelize.STRING
  },
  note: {
    type: Sequelize.STRING
  }
};

module.exports = requestSchema;