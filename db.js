const Sequelize = require("sequelize")
const ConnectionString=process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'
const sequelize=new Sequelize(ConnectionString,{define:{timestamps:false}})
sequelize.sync(
  // { force: true }
  // {alter: true}
)
.then(()=>{console.log("connect to database")})
.catch(console.error)
module.exports=sequelize