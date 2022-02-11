const mongoose = require('mongoose');

const pantrySchema = new mongoose.Schema({
   
     pantryName:{
         type:String
     },
     description:{
         type:String
     },
     error:{
         type:Array
     },
     notifications:{
         type:Boolean,
         default:true
     },
     percentfull:{
         type:Number,
         default:0
     },
     email:{
        type:String
     }

} , { timestamps : true});

module.exports = mongoose.model('Pantry1' , pantrySchema);