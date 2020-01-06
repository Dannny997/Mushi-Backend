const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    cellnumber:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    age:{
        type:Number,
        min:16,
        max:60,
        required:true
    }
})
module.exports=User=mongoose.model('DUser',UserSchema)