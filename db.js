const Sequelize = require("sequelize")
const ConnectionString=process.env.DATABASE_URL || 'postgres://ticketWrap:LetMeIn@localhost:5432/ticketWrap'
const sequelize=new Sequelize(ConnectionString,{define:{timestamps:false}})
sequelize.sync(
  // { force: true }
)
.then(()=>{console.log("connect to database")})
.catch(console.error)
module.exports=sequelize