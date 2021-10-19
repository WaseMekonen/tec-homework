const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'public2','contact.html'))
})
app.get('/courses',(req,res)=>{
    res.sendFile(path.join(__dirname,'public2','courses.html'))
})
app.get('/events',(req,res)=>{
    res.sendFile(path.join(__dirname,'public2','events.html'))
})
app.get('/mentoring',(req,res)=>{
    res.sendFile(path.join(__dirname,'public2','mentoring.html'))
})
app.get('/testimonials',(req,res)=>{
    res.sendFile(path.join(__dirname,'public2','testionials.html'))
})

app.listen(port);