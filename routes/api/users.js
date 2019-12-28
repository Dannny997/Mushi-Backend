const express =require('express');
const router =express.Router();
const User =require('../../models/User');

router.get('/test',(req,res)=>res.json({msg:"test api is working of users"}));


router.post('/dan',(req,res)=>res.json({kut:"jhal"}));


router.post('/register',(req,res)=>{
    User.findOne({email:req.body.useremail}).then(user=>{
        if(user)
        {
            res.json({msg:"user already exists"});
        }
        else {
            const newusers=new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                cellnumber:req.body.number,
                age:req.body.age,
            })
            newusers.save().then(res.json({message:"Account has been created"}));
        }
    }
        
    )}
)

router.post('/userdata',(req,res)=>{
    User.findOne({email:req.body.email}).then(
        user=>{
            if(user){
                res.json(user)
            }
            else{
                res.json({message:"cannot find user"})
            }
        }
    )
})

router.post('/username',(req,res)=>{
    User.find({_id:req.body.userid}).then(
        user=>{
            if(user){
                res.json(user)
            }
            else{
                res.json({message:"cannot find user"})
            }
        }
    )
})

router.post('/userid',(req,res)=>{
    User.findById(req.body.userid).then(
        user=>{
            if(user){
                res.json(user)
            }
            else{
                res.json({message:"cannot find user"})
            }
        }
    )
})


router.post('/updatename',(req,res)=>{
    User.updateOne({email:req.body.email},{password:req.body.password},function(
        err
    ){
        if(err){
            console.log(err) 
            }
            else{
                res.json("succesfully updated!")
            }
    })})




module.exports =router;


