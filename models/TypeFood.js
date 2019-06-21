const Sequelize = require('sequelize')
const sequelize = require('../db')

const TypeFood = sequelize.define('type_foods', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  } 
  
}, {
  timestamps: false,
  tableName: 'type_foods'
})

module.exports = TypeFood