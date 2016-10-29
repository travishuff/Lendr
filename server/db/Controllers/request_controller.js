const Sequelize = require('sequelize');
const requestSchema = require('../Models/request_model');

// creates the Request table
let Request = sequelize.define('item', requestSchema);

// defines all of the functions that will be executed on the Request table
let requestController = {
  createRequest: function (request) {
    sequelize.sync({ logging: console.log }).then(() => {
      Request.create(request, { validate: true }).catch(function (errors) { console.log('error:', errors) });
    });
  },

  getWishlist: function (userName) { //not sure if we will use username or userId
    
  }
};

module.exports = requestController;