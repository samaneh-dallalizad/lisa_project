const {Router} =require("express")
const Menu=require("../models/Menu")
const moment =require("moment")
const router=new Router();

router.post('/hooks',(req,res,next)=>{ 

    if (req.body.queryResult.action === "menu") {   
      
      //today menu 
       if(req.body.queryResult.parameters.date){ 
      
        //today
        if(moment(req.body.queryResult.parameters.date).format('MM-DD-YYYY')=== moment().format('MM-DD-YYYY')){         
            Menu.aggregate('dish_name', 'DISTINCT', {where:{date:moment().format('YYYY-MM-DD')}, plain: false })
                .then(menus=>{
                  let dishes=""            
                  menus.forEach(function(item){
                    dishes+=item.DISTINCT+","
                  })        
                  
                    res.json({fulfillmentText:"today menu is :"+dishes+"............"})
                
             })
          
        }
         
        

       }
   
     }
  })
  module.exports=router