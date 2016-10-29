const Sequelize = require('sequelize');
const requestSchema = require('../Models/request_model');

// creates the Request table
let Request = sequelize.define('item', requestSchema);

// defines all of the functions that will be executed on the Request table
let requestController = {
  createRequest: function (request) {
    sequelize.sync({ logging: console.log }).then(() => {
      Request.create(request).catch(function (errors) { console.log('error:', errors) });
    });
  },

  getWishlist: function (userName) {
    Request.findAll({ where: { lendeename: userName } }).then(function(wishlist) {
      // wishlist will be an array of Request instances with the specified username
      console.log(wishlist);
    })
  },

  getOpenRequests: function () {
    Request.findAll().then(function (requests) {
      // requests will be an array of all Request instances
      console.log(requests);
    })
  },

  deleteRequest: function (requestArr) {
    Request.destroy({
      where: {lendeename: itemArr[0], itemname: itemArr[1]}
    })
  }
  
};

module.exports = requestController;