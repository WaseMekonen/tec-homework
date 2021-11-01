const mongoDB = require("mongodb");
const mongoClient = mongoDB.MongoClient;
const objectId = mongoDB.ObjectId;
const url = "mongodb://localhost:27017";

const arrayOfPosts = [
  "617e831d042782340d37734e",
  "617e831d042782340d37734f",
  "617e831d042782340d377350",
];

mongoClient.connect(url, (err, db) => {
  if (err) {
    console.log(err);
  }
  const dataBase = db.db("test");
  //   addPostsToAuthors(dataBase, "617a9717128170474d54cd83", arrayOfPosts);
  //   getPostsOfAuthors(dataBase, "author");
  // getAgeAuthorsLessThan(dataBase,"author");
  getAgeAuthorsGreatThan(dataBase, "author");
  //   getAgeGreatThanaAndEqual(dataBase, "author");
  // abc(dataBase,"author");
});

// 1:
const addPostsToAuthors = (db, authorId, arrayOfPostsId) => {
  for (const postId of arrayOfPostsId) {
    db.collection("author").updateOne(
      { _id: objectId(authorId) },
      { $push: { posts: postId } },
      (err, res) => {
        if (err) {
          console.log(err);
        }
        console.log(res);
      }
    );
  }
};

// 2:
const getPostsOfAuthors = (db, collectionName) => {
  db.collection(collectionName)
    .find({ "posts.0": { $exists: true } })
    .toArray((err, res) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
    });
};

// 3:
const getAgeAuthorsLessThan = (db, collectionName) => {
  db.collection(collectionName)
    .find({ age: { $lt: 40 } })
    .toArray((err, res) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
    });
};

// 4:
const getAgeAuthorsGreatThan = (db, collectionName) => {
  db.collection(collectionName)
    .find({ age: { $gt: 25 } })
    .toArray((err, res) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
    });
};

// 5:
const getAgeGreatThanaAndEqual = (db, collectionName) => {
  db.collection(collectionName)
    .find({ age: { $gt: 20, $lt: 60 } })
    .toArray((err, res) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
    });
};

// 6:
const abc = (db, collectionName) => {
  db.collection(collectionName)
    .find({ age: { $gt: 20, $lt: 60 } })
    .limit(3)
    .toArray((err, res) => {
      if (err) {
        console.log(err);
      }
      console.log(res);
    });
};

// 7:
