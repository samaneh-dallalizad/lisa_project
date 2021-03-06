const Sequelize = require("sequelize")
const ConnectionString = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const sequelize = new Sequelize(ConnectionString, { define: { timestamps: false } })

sequelize.sync(
  // { force: true }    // Force switch, syncs database to model
  // {alter: true}      // Alter switch, syncs database without deleting rows
)
  .then(() => { console.log("Connected to database") })
  .catch(console.error)

module.exports = sequelize