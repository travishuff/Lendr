const Sequelize = require('sequelize');

// defining the user schema

userSchema = {
  // _id: {
  //   type: Sequelize.INTEGER,
  //   primaryKey: true,
  //   autoIncrement: true,
  // },
  username: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING
  },
  location: {
    type: Sequelize.STRING
  },
  karma: {
    type: Sequelize.INTEGER
  }
}

module.exports = userSchema;