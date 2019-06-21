const Sequelize = require("sequelize")
const ConnectionString=process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/db_chatbot'
const sequelize=new Sequelize(ConnectionString,{define:{timestamps:false}})
sequelize.sync()
.then(()=>{console.log("connect to database")})
.catch(console.error)
module.exports=sequelize