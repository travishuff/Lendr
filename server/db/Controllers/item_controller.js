const sequelize = require('../database');
const itemSchema = require('../Models/item_model');

// creates the Item table
let Item = sequelize.define('item', itemSchema);

// defines all of the functions that will be executed on the Item table 
let itemController = {
  createItem: (req, res, next) => {
    console.log('reqBPODDY', req.body)
    sequelize.sync({ logging: console.log }).then(() => {
      Item.create(req.body)
        .then(() => {
          res.status(200).end();
        })
        .catch((error) => {
          console.log('error:', error)
          res.status(400).end();
        });
    });
  },

  getAllItems: (req, res, next) => {
    Item.findAll()
      .then((data) => {
        res.status(200);
        res.send(data);
      })
      .catch((error) => {
        console.log('error:', error)
        res.status(400).end();
      });
  },

  getAllOwnerItems: (req, res, next) => {
    Item.findAll({ where: { ownername: req.cookies.username } })
      .then((data) => {
        res.status(200);
        res.send(data);
      })
      .catch((error) => {
        console.log('error:', error)
        res.status(400).end();
      });
  },

  getAllLendeeItems: (req, res, next) => {
    Item.findAll({ where: { lendee: req.cookies.username } })
      .then((data) => {
        res.status(200);
        res.send(data);
      })
      .catch((error) => {
        console.log('error:', error)
        res.status(400).end();
      });
  },

  deleteItem: (req, res, next) => {
    Item.destroy({ where: { ownername: req.cookies.username, itemname: req.body.itemname } })
      .then(() => {
      res.status(200).end();
      })
      .catch((error) => {
        console.log('error:', error)
        res.status(400).end();
      });
  }
}  

module.exports = itemController;