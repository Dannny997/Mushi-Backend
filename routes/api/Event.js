const express =require('express');
const router =express.Router();
const Event =require('../../models/Event');

router.get('/test',(req,res)=>res.json({msg:"test api is working of users"}));


router.post('/dan',(req,res)=>res.json({kut:"jhal"}));


router.post('/register',(req,res)=>{
    Event.findOne({email:req.body.useremail}).then(user=>{
        if(user)
        {
            res.json({msg:"Event already exists"});
        }
        else {
            const newusers=new Event({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                cellnumber:req.body.number,
                age:req.body.age,
            })
            newusers.save().then(res.json({message:"Event has been created"}));
        }
    }
        
    )}
)

router.post('/Eventdata',(req,res)=>{
    Event.findOne({email:req.body.email}).then(
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

router.post('/Eventname',(req,res)=>{
    Event.find({_id:req.body.Eventid}).then(
        user=>{
            if(Event){
                res.json(Event)
            }
            else{
                res.json({message:"cannot find user"})
            }
        }
    )
})

router.post('/Eventid',(req,res)=>{
    Event.findById(req.body.Eventid).then(
        Event=>{
            if(Event){
                res.json(Event)
            }
            else{
                res.json({message:"cannot find event"})
            }
        }
    )
})


router.post('/updatename',(req,res)=>{
    Event.updateOne({email:req.body.email},{password:req.body.password},function(
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


