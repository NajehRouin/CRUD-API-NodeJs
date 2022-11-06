const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const friendSchema=new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name:{
        type:String,
      
    },
    bestLine:{
        type:String,
       
    },
    age:{
        type:Number,
     
    },
    skills:{
        type:String,
      
    }
})
module.exports=mongoose.model("friends",friendSchema)