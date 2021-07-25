const express = require('express');
const app = express();


app.get('/',(req, res) => {
    res.json({message:'Hello World!'});
});

app.get('/login',(req, res) => {
    res.json({message:'login route'});
});

app.get('/signup',(req, res) => {
    res.json({message:'signup route'});
});

app.get('/logout',(req, res) => {
    res.json({message:'logout route'});
});

app.listen(
    8000,() => {console.log('Server is running on port 8000');}
);