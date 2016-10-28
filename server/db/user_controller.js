const Sequelize = require('sequelize');
let userController = {
  userSchema: {
    _id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.STRING
    },
    karma: {
      type: Sequelize.INTEGER
    }
  },
  // createUser: function (data) {

  // }
}

module.exports = userController;