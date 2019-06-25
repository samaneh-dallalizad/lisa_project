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