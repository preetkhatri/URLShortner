const express = require('express');
const app = express();
const url = require('./Routes/url');
const cors = require('cors')
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.json());
app.use(express.static('public'));
app.use(cors());
app.use('/api/v1/urls',url);


const port = process.env.PORT || 3000


const start = async ()=>{
    try{
        const bool = await connectDB(process.env.MONGO_URI)
        if(bool) console.log("connected to DB");
        app.listen(port,(req,res)=>{
            console.log(`Listening to ${port}...`);
        })
    } catch(err){
        console.log(err);
    }
};

start();