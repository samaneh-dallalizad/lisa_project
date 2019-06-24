const express =require("express")
const app =express()
const bodyParser=require("body-parser")
const dishRouter = require("./dish-table/routes");
const typeRouter = require('./type-table/routes')
const port =process.env.PORT||4000
const HooksRouter=require("./routes/hooks")
const MenuRouter=require("./routes/menu")
const moment =require("moment")
const cors = require('cors')

const date="2019-06-25T12:00:00+02:00"

console.log(moment(date).calendar())
app
  .use(cors())
  .use(bodyParser.json())
  .use(dishRouter)
  .use(typeRouter)
  .use(MenuRouter)
  .use(HooksRouter)

app.listen(port,console.log(`listen to port ${port}`))