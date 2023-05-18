const express=require('express');
const connectToMongo=require("./db");
const cors=require('cors');

connectToMongo();
const app=express();

app.use(express.json());
app.use(cors());
const port=process.env.API_PORT;

app.use('/flights',require('./routes/flights'));

app.listen(port,()=>{
    console.log(`Quiz app listening at http://localhost:${port}`);
})