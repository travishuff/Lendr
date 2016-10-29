const Sequelize = require('sequelize');
const itemSchema = require('../Models/item_model');

// creates the Item table
let Item = sequelize.define('item', itemSchema);

// defines all of the functions that will be executed on the Item table 
let itemController = {
  createItem: function (data) {
    let item = data;
    sequelize.sync({ logging: console.log }).then(() => {
        Item.create(item, { validate: true }).catch(function (errors) { console.log('error:', errors) });
    });
  }
}  

module.exports = itemController;