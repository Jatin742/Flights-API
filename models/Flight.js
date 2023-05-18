const mongoose=require('mongoose');
const {Schema}=mongoose;
const FlightSchema=new Schema({
    source:{
        type:String,
        required:true,
    },
    destination:{
        type:String,
        required:true
    },
    airline:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    date:{
        type:String
    }
});
const Flight=mongoose.model('flight',FlightSchema);
module.exports=Flight;