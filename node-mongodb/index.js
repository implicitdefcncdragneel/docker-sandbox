const mongoose = require('mongoose');

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