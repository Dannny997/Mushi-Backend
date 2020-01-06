const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const registration=new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:'users',
        required:true
    },
    events:{
        type:Schema.Types.ObjectId,
        ref:'Event',
        required:true
    },
    answers:[ { question1:",answer" }, { question2:",answer" }, {question3:",answer"}],
    
})
module.exports=registration=mongoose.model('Registration',registration)