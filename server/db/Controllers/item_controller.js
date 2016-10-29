const sequelize = require('../database');
const itemSchema = require('../Models/item_model');

// creates the Item table
let Item = sequelize.define('item', itemSchema);

// defines all of the functions that will be executed on the Item table 
let itemController = {
  createItem: function (data) {
    let item = data;
    sequelize.sync({ logging: console.log }).then(() => {
        Item.create(item).catch(function (errors) { console.log('error:', errors) });
    });
  },

  getAllItems: function () {
    Item.findAll().then(function (items) {
      // items will be an array of all Item instances
      console.log(items);
    })
  },

  getAllOwnerItems: function (userName) {
    Item.findAll({ where: { username: userName } }).then(function(ownerItems) {
      // ownerItems will be an array of Item instances with the specified username
      console.log(ownerItems);
    })
  },

  getAllLendeeItems: function (userName) {
    Item.findAll({ where: { lendee: userName } }).then(function(lendeeItems) {
      // lendeeItems will be an array of Item instances with the specified username
      console.log(lendeeItems);
    })
  },

  deleteItem: function (itemArr) {
    Item.destroy({
      where: {ownername: itemArr[0], itemname: itemArr[1]}
    })
  }
  
}  

module.exports = itemController;