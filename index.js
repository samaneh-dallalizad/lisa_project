const express =require("express")
const app =express()
const bodyParser=require("body-parser")
const port =process.env.PORT||5000
const TypeFood=require("./models/TypeFood")
const Menu=require("./models/Menu")

app.use(bodyParser.json())

app.get("/",(req,res,next)=>{
      res.json({
      msg:"successfully sent",
      type:"success"      
    })  
  
 })

app.post("/typefoods",(req,res,next)=>{
  TypeFood.create({name:"soup"})
  .then(food=>res.status(201).json(food))
})

app.post("/menus" , (req,res,next)=>{
  Menu.create({dish_name:"dish1",day:"friday",typeFoodId:1})
  .then(menu=>res.status(201).json(menu))
})

app.post('/hooks',(req,res,next)=>{
  res.json({fulfillmentText:"I am ready to talk"})
})






app.listen(port,console.log(`listen to port ${port}`))