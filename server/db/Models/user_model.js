const Sequelize = require('sequelize');

userSchema = {
  username: {
    type: Sequelize.STRING,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING,
  },
  karma: {
    type: Sequelize.INTEGER,
  }
}

module.exports = userSchema;
