const Sequelize = require('sequelize');

let requestController = {
  requestSchema: {
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
  },
  // createRequest: function (data) {

  // }
}  
module.exports = requestController;