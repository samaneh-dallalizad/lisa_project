const express =require("express")
const app =express()
const bodyParser=require("body-parser")
const dishRouter = require("./dish-table/routes");
const typeRouter = require('./type-table/routes')
const port =process.env.PORT||5000
const HooksRouter=require("./routes/hooks")
const MenuRouter=require("./routes/menu")
const moment =require("moment")
const cors = require('cors')
app
  .use(cors())
  .use(bodyParser.json())
  .use(dishRouter)
  .use(typeRouter)
  .use(MenuRouter)
  .use(HooksRouter)

app.listen(port,console.log(`listen to port ${port}`))