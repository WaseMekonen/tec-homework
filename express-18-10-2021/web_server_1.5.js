console.log('app is loading...');
const express =require('express');
const app = express()
const path = require('path');
const port = 8080;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'public1','index.html'));
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,"public1",'about.html'));
});

app.listen(port);