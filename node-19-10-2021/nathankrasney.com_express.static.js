const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;
const publicPath = path.join(__dirname,'public');

app.use(express.static(publicPath));

app.listen(PORT,()=>{
    console.log(`app is listening to port ${PORT}`);
});







// Home , About , Contact, Courses , Mentoring , Testimonials , Events 