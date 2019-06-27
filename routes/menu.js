const {Router} =require("express")
const Menu=require("../models/Menu")
const router=new Router();

router.get("/menus/",(req,res,next)=>{
  const { date } = req.query
  Menu
    .findAll({
      where: {
        date: date
      }
    })
    .then(menu => {
      res.json(menu)
    })     
  })

router.post("/menus" , (req,res,next)=>{
  const { dish } = req.body
  Menu.create(dish)
    .then(menu =>res.status(201).json(menu))

})

router.delete("/menus/:id", (req, res, next) => {
  const { id } = req.params
  console.log("REQ PARAMS", req.params)
  Menu
    .findByPk(id)
    .then(menuItem => {
      if (!menuItem) {
        return res.status(404).send({
          message: `Menu item does not exist`
        })
      }
      return menuItem.destroy()
        .then(() => res.send({
          message: `Menu item was deleted`
        }))
    })
    .catch(error => next(error))
})

module.exports=router