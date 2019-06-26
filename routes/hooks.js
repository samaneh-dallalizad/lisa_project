const {Router} =require("express")
const Menu=require("../models/Menu")
const moment =require("moment")
const router=new Router();

router.post('/hooks',(req,res,next)=>{ 
    
    const {action, parameters} = req.body.queryResult  
    
     if (action === "menu") {  
      // console.log(+moment(parameters.date))
      //today menu 
       if(parameters.date){        
        let outputMenu  =""        
        Menu.aggregate('dish_name', 'DISTINCT', {where:{date:moment(parameters.date).format('YYYY-MM-DD')}, plain: false })
            .then(menus=>{             
               outputMenu= menus.map(menu => menu.DISTINCT).join(', ')            
                if(outputMenu!==""){
                  res.send({fulfillmentText:"the menu is :"+outputMenu})
                }else{

                  res.send({fulfillmentText:"there is no menu yet"})
                }                                          
                        
            }).catch(error=>
               console.log(error)
            ) 
         
      //   if(moment(parameters.date).format('MM-DD-YYYY')=== moment().format('MM-DD-YYYY')){           
                     
      //    }
      //   else if(+moment(parameters.date) > +moment()){
      //       console.log(moment(parameters.date).format('MM-DD-YYYY'))
      //       console.log(moment().format('MM-DD-YYYY'))
      //       res.send("others day")
      //   }
      //   else{
      //     res.send("oops")
      //   }

        }else{
           res.send("")
        }      
         
     }
  })
  module.exports=router