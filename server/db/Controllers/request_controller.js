const sequelize = require('../database');
const requestSchema = require('../Models/request_model');

// creates the Request table
let Request = sequelize.define('request', requestSchema);

// defines all of the functions that will be executed on the Request table
let requestController = {
  createRequest: (req, res, next) => {
    sequelize.sync({ logging: console.log }).then(() => {
      Request.create(request)
        .then(() => {
          res.status(200).end();
        })
        .catch((error) => {
          console.log('error:', errors);
          res.status(400).end();
        });
    });
  },

  getWishlist: (req, res, next) => {
    Request.findAll({ where: { lendeename: userName } })
      .then(() => {
        res.status(200).end();
      })
      .catch((error) => {
        console.log('error:', errors);
        res.status(400).end();
      });
  },

  getOpenRequests: (req, res, next) => {
    Request.findAll()
      .then(() => {
        res.status(200).end();
      })
      .catch(() => {
        console.log('error:', errors);
        res.status(400).end();
      })
  },

  deleteRequest: (req, res, next) => {
    Request.destroy({ where: { lendeename: itemArr[0], itemname: itemArr[1] } })
      .then(() => {
        res.status(200).end();
      })
      .catch(() => {
        console.log('error:', errors);
        res.status(400).end();
      })
  }
  
};

module.exports = requestController;