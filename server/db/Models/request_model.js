// defining the request schema

requestSchema = {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING
  },
  item: {
    type: Sequelize.STRING
  },
  note: {
    type: Sequelize.STRING
  }
};

module.exports = requestSchema;