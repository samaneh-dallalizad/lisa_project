const {Router} =require("express")
const Menu=require("../models/Menu")
const moment =require("moment")
const router=new Router();

router.post('/hooks',(req,res,next)=>{ 

    console.table(req.body.queryResult)
    const {action, parameters} = req.body.queryResult
   
    
     if (action === "menu") {  
     // console.log(+moment(parameters.date))
      //today menu 
       if(parameters.date){      

          if(moment(parameters.date).format('MM-DD-YYYY')=== moment().format('MM-DD-YYYY')){  
          
            Menu.aggregate('dish_name', 'DISTINCT', {where:{date:moment().format('YYYY-MM-DD')}, plain: false })
                .then(menus=>{
                  console.log(menus)                             
                    res.send({fulfillmentText:"today menu is :"+ menus.map(menu => menu.DISTINCT).join(', ')
                    +"............"})               
         })
          
        }
       else if(+moment(parameters.date) < +moment()){
            res.send("others day")
        }
        
         
      

       }
       res.send("oops")
     }
  })
  module.exports=router