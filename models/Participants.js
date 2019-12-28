const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const partSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    occupation:{
        type:String,
        required:true
    },
    organisation:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    event:{
        type:String,
        required:true
    },

    answer:{
        type : String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        required:true
    },
    applied:{
        type:Date,
        required:true
    },
})

module.exports=parti=mongoose.model('DParticipants',partSchema)
