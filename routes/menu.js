const {Router} =require("express")
const Menu=require("../models/Menu")
const router=new Router();

router.get("/menus",(req,res,next)=>{
  Menu.findAll().then(menus=>{
    res.json({
      msg:"successfully sent",
      type:"success",
      result:menus      
    })
  })    
  
 })

 router.post("/menus" , (req,res,next)=>{
  const newMenu={
    type_name:req.body.type_name,
    dish_name:req.body.dish_name,
    date:req.body.date
  }


  Menu.create(newMenu)
  .then(menu=>res.status(201).json(menu))
})

module.exports=router