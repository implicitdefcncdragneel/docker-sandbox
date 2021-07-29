const mongoose = require('mongoose');
const express = require('express');

const app = express();


// Database Connection
const DATABASE ="mongodb://mymongo:27017/example";

mongoose
.connect(DATABASE,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("DB Connected");
})
.catch(()=>{
    console.log("Error in DB Connection");
});


// Backend
app.listen(8000,()=>{
    console.log("Server Port")
})

app.get("/",(req, res)=>{
    res.json({
        message:"root endpoint"
    })
})