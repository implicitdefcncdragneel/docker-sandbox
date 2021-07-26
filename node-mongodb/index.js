const mongoose = require('mongoose');

const DATABASE ="mongodb+srv://cluster0.2q7nn.mongodb.net/mymongo";

mongoose
.connect(DATABASE)
.then(()=>{
    console.log("DB Connected");
})
.catch(()=>{
    console.log("Error in DB Connection");
});