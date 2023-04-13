const express = require('express')
const router = express.Router(); 
const empdata=require("../model/empdata")

router.post("/register" , (req,res)=>{
    res.header("Access-Control-Allow-Orgin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  
        var user = req.body.data;
  
       
        empdata.findOne({email:user.email.trim()})
        .then((data)=>{
        if(data===null){
  
          var adduser = {

            username:user.username,
            jobtype:user.jobtype,
            ccode:user.ccode,
            phone:user.phone,
            email:user.email,
            address:user.address,
            city:user.city,
            state:user.state,
            pcontact:user.pcontact,
            cpphone:user.cpphone,
            pphone:user.pphone,
            prelation:user.prelation,
            scontact:user.scontact,
            spphone:user.spphone,
            sphone:user.sphone,
            srelation:user.srelation
           }
  
          var adduser = new empdata(adduser);
          adduser.save();
          res.send({ status: true, data: 'Success' })
         
        }
        else{
         
          res.send({ status: false, data: 'Email already taken' })
        }
       })
  
  });
  

  router.get("/list" , (req,res)=>{
        empdata.find().then((data)=>{
      res.send(data)
    })
  })
  



  router.get('/getemployee/:id',  (req, res) => {
  
    const id = req.params.id;
      empdata.findOne({"_id":id})
      .then((product)=>{
          res.send(product);
      });
  })



  
  router.put('/editemployee',(req,res)=>{
  
    console.log(req.body)
    id=req.body._id,
    username = req.body.username,
    jobtype = req.body.jobtype,
    ccode = req.body.ccode,
    phone = req.body.phone,
    email= req.body.email,
    address = req.body.address,
    city= req.body.city,
    state = req.body.state,
    pcontact= req.body.pcontact,
    cpphone= req.body.cpphone,
    pphone= req.body.pphone,
    prelation = req.body. prelation,
    scontact = req.body. scontact,
    spphone= req.body.spphone,
    sphone = req.body.sphone,
    srelation = req.body.srelation

   empdata.findByIdAndUpdate({"_id":id},
                                {$set:{"username":username,
                                "jobtype":jobtype,
                                " ccode ": ccode ,
                                " phone ": phone ,
                                " email": email,
                                "address":address,
                                " city": city,
                                "state ":state ,
                                "pcontact":pcontact,
                                "cpphone":cpphone,
                                " pphone": pphone,
                                "prelation":prelation,
                                "scontact":scontact,
                                "spphone": spphone,
                                "sphone": sphone,
                              "srelation":srelation
                              }})
   .then(function(){
       res.send();
   })
 })



 router.delete('/deleteemployee/:id',(req,res)=>{
   
  id = req.params.id;
  empdata.findByIdAndDelete({"_id":id})
  .then(()=>{
      console.log('success')
      res.send();
  })
})



module.exports=router;