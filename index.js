const express =require("express")
const app =express()
const bodyParser=require("body-parser")
const dishRouter = require("./dish-table/routes");
const typeRouter = require('./type-table/routes')
const port =process.env.PORT||5000
const TypeFood=require("./models/TypeFood")
const Menu=require("./models/Menu")
const MenuRouter=require("./routes/menu")
const cors = require('cors')


app
  .use(cors())
  .use(bodyParser.json())
  .use(dishRouter)
  .use(typeRouter)
  .use(MenuRouter)


app.get("/",(req,res,next)=>{
  Menu.findAll().then(menus=>{
    res.json({
      msg:"successfully sent",
      type:"success",
      result:menus      
    })
  })    
  
 })

app.post("/typefoods",(req,res,next)=>{
  TypeFood.create({name:"soup"})
  .then(food=>res.status(201).json(food))
})

app.post("/menus" , (req,res,next)=>{
  Menu.bulkCreate([
    {dish_name:"tomato soup",day:"sunday",typeFoodId:1},
    {dish_name:"onion soup",day:"monday",typeFoodId:1}
  ])
  .then(menu=>res.status(201).json(menu))
})


app.post('/hooks',(req,res,next)=>{ 

const dayIndex=new Date().getDay()
const days=["sunday","monday","tuesday","wednesday","thursday","friday", "saturday"]

  if (req.body.queryResult.action === "menu") {  
 
    //today menu 
    if(req.body.queryResult.parameters.requestMenu){
      
      switch(req.body.queryResult.parameters.requestMenu){
        case "today menu":
            Menu.aggregate('dish_name', 'DISTINCT', {where:{day:days[dayIndex]}, plain: false })
            .then(menus=>{
              let dishes=""            
              menus.forEach(function(item){
                dishes+=item.DISTINCT+","
              })        
                console.log(dishes)
                res.send({fulfillmentText:"today menu is :"+dishes+"............"})
            
            })

        break

      }
      

    }else{
      res.send("ddd")
    }
 
   }
})








app.listen(port,console.log(`listen to port ${port}`))