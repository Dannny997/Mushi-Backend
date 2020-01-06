const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const EventSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    Description:{
        type : String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    },
 {
    timestamps: true
  })

module.exports=Event=mongoose.model('DEvent',EventSchema)
