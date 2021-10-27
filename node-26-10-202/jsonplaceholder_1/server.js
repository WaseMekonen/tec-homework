const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");
const axios = require("axios");
const { runInNewContext } = require("vm");


app.use(express.json());

// returning cooments by GET method

app.get("/comments", (req, res) => {
  axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      //   console.log(response);
      res.send(response.data);
    })
    .catch(() => {
        res.sendStatus(404);
      });
});

// returning cooments by GET method with id

app.get("/comments/:id", (req, res) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/comments/${req.params.id}`)
    .then((response) => {
      //   console.log(response);
      res.send(response.data);
    })
    .catch(() => {
      res.sendStatus(404);
    });
});

// creating comment by POST method

app.post("/comments", (req, res) => {
    console.log(req.body);
    if(typeof req.body !== 'object' || Object.keys(req.body).length === 0){
        res.sendStatus(400)
    }
  axios
    .post("https://jsonplaceholder.typicode.com/comments", req.body)
    .then((response) => {
      res.send(response.data);
    })
    .catch(() => {
        res.sendStatus(404);
      });
});

// delete comment by DELETE method with id

app.delete("/comments/:id",(req,res)=>{
    axios
    .delete(`https://jsonplaceholder.typicode.com/comment/${req.params.id}`)
    .then(response =>{
        res.send(response.data);
    })
    .catch(() => {
        res.sendStatus(404);
      });
})

app.listen(PORT, () => {
  console.log(`App is listing to port:${PORT}`);
});
