const sequelize = require('../database');
const requestSchema = require('../Models/request_model');
const cookieParser = require('cookie-parser');

// creates the Request table
let Request = sequelize.define('request', requestSchema);

const requestController = {
  createRequest: (req, res, next) => {
    console.log(req.body);
    sequelize.sync({ logging: console.log }).then(() => {
      Request.create(req.body)
        .then(() => {
          res.status(200).end();
        })
        .catch( error => {
          console.error('error:', errors);
          res.status(400).end();
        });
    });
  },

  getWishlist: (req, res, next) => {
    Request.findAll({ where: { lendeename: req.cookies.username } })
      .then((data) => {
        console.log('all lendee requests server side', data);
        res.status(200);
        res.send(data);
      })
      .catch((error) => {
        console.error('error:', errors);
        res.status(400).end();
      });
  },

  getOpenRequests: (req, res, next) => {
    Request.findAll()
      .then((data) => {
        res.status(200);
        res.send(data);
      })
      .catch(() => {
        console.error('error:', errors);
        res.status(400).end();
      });
  },

  deleteRequest: (req, res, next) => {
    Request.destroy({ where: { lendeename: itemArr[0], itemname: itemArr[1] } })
      .then(() => {
        res.status(200).end();
      })
      .catch(() => {
        console.error('error:', errors);
        res.status(400).end();
      });
  }

};

module.exports = requestController;
