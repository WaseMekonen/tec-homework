const express = require("express");
const path = require("path");
const app = express();
const axios = require("axios");
const PORT = 8080;
const publicPath = path.join(__dirname,"..","public");
const hbs = require('hbs'),
viewsPath = path.join(__dirname,"..","templetes","views"),
partialsPath =path.join(__dirname,"..","templetes","partials");

app.set("view engine","hbs");

app.set("views",viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicPath));

app.get("/",(req,res)=>{
  res.render("index");
});

app.get("/about",(req,res)=>{
  res.render("about");
});

app.get("/help",(req,res)=>{
  res.render("help");
});

app.get("/error",(req,res)=>{
  res.render("error");
});

app.get("/location",(req,res)=>{
  res.render("location");
});

app.get("/city", (req, res) => {
  const apiKey = `3ea2acb526183189904890dbad0452df`;
  const cityName = `${req.query.city}`;
  const apiUrL = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  axios
    .get(apiUrL)
    .then(function (response) {
      console.log(response);
      console.log("it's good");
      if (response.status === 200) {
        console.log(response.data);
        res.send(
          `name: ${response.data.name}, longitude: ${response.data.coord.lon}, latitude:${response.data.coord.lat}`
        );
      }
    })
    .catch(function (error) {
      // handle error
      console.log("request got error");
      console.log(error);
    });
});
app.listen(PORT, () => {
  console.log(`App is listening to : ${PORT}`);
});
