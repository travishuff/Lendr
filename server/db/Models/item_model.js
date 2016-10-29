// defining the item schema

itemSchema = {
  _id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  itemtype: {
    type: Sequelize.STRING
  },
  itemname: {
    type: Sequelize.STRING
  },
  itemdescription: {
    type: Sequelize.STRING
  },
  itempictureurl: {
    type: Sequelize.STRING
  },
  lastavailabledate: {
    type: Sequelize.DATE
  },
  ownername: {
    type: Sequelize.STRING
  },
  lendee: {
    type: Sequelize.STRING
  },
  datelent: {
    type: Sequelize.DATE
  },
  datedue: {
    type: Sequelize.DATE
  }
};

module.exports = itemSchema;