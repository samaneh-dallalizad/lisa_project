const {Router} =require("express")
const Menu=require("../models/Menu")
const moment =require("moment")
const router=new Router();

router.post('/hooks',(req,res,next)=>{ 
    
    const {action, parameters} = req.body.queryResult  
    
     if (action === "menu") {  
      //today menu 
       if(parameters.date){        
        let outputMenu  =""        
        Menu.aggregate('dish_name', 'DISTINCT', {where:{date:moment(parameters.date).format('YYYY-MM-DD')}, plain: false })
            .then(menus=>{             
               outputMenu= menus.map(menu => menu.DISTINCT).join(', ')            
                if(outputMenu!==""){
                  res.send({fulfillmentText:`Our menu for ${parameters.date.getDate()} is:`+outputMenu})
                }else{
                  res.send({fulfillmentText:"There is no menu for this day yet"})
                }                                          
                        
            }).catch(error=>
               console.log(error)
            ) 
        }else{
           res.send("")
        }      
         
     }
  })
  module.exports=router