const mongoose=require('mongoose');
const dotenv=require('dotenv').config();
// console.log(dotenv.parsed);
const mongoURL=process.env.MONGO_URL;

const connectToMongo=()=>{
    mongoose.connect(mongoURL)
    .then(()=>console.log("Connected To MongoDB Successfully"))
    .catch((err)=>console.log(err));
}

module.exports=connectToMongo;