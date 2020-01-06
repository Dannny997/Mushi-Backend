const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const question=new Schema({
    events:{
        type:Schema.Types.ObjectId,
        ref:'Event',
        required:true
    },
    question1:{
        text:"Why do You want to join?",
        type:text
    },
    question2:{
        text:"What is your previous experience?",
        type:text
    },
    question3:{
        text:"What you are gonna learn from this?",
        type:text
    }

})
module.exports=question=mongoose.model('Question',question)