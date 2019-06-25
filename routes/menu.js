const {Router} =require("express")
const Menu=require("../models/Menu")
const router=new Router();

router.get("/menus/",(req,res,next)=>{
  console.log("REQ", req.query.date)
  const { date } = req.query
  Menu.findAll({
    where: {
      date: date
    }
  }).then(menus=>{
    res.json({
      msg:"successfully sent",
      type:"success",
      result:menus      
    })
  })    
  
 })


router.post("/menus" , (req,res,next)=>{
  const { dish } = req.body
  console.log(dish)
  Menu.create(dish)
    .then(menu =>res.status(201).json(menu))

})

module.exports=router