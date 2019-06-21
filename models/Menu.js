const Sequelize = require('sequelize')
const sequelize = require('../db')
const TypeFood =require("./TypeFood")

const Menu = sequelize.define('menus', {
  dish_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  day: {
    type: Sequelize.STRING,
    allowNull: true
  }, 
  
}, {
  timestamps: false,
  tableName: 'menus'
})
Menu.belongsTo(TypeFood)

module.exports = Menu