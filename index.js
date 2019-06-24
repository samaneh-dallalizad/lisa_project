const express =require("express")
const app =express()
const bodyParser=require("body-parser")
const MenuRouter=require("./routes/menu")
const port =process.env.PORT||5000

app.use(bodyParser.json())
app.use(MenuRouter)

app.listen(port,console.log(`listen to port ${port}`))