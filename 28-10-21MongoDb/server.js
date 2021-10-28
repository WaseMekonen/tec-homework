const express = require("express");
const app = express();
const mongo = require("mongodb").MongoClient;
const PORT = 8080;
const url = "mongodb://localhost:27017/test";

// mongo.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("test");
//   dbo
//     .collection("author")
//     .find({})
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });

//   dbo
//     .collection("post")
//     .find({})
//     .toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result);
//       db.close();
//     });
// });

function getAllCollections(collection) {
  mongo.connect(url, function (err, db) {
    if (err) throw err;
    let dbo = db.db("test");
    dbo
      .collection(collection)
      .find({})
      .toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });
  });
}

getAllCollections("author")
app.listen(PORT, () => {
  console.log(`app is listening to port:${PORT}`);
});
