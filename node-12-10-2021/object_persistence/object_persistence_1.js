console.log("app is loading...");
const fs = require("fs");
const newFile = "books.json";

let books = [
  { name: "book1", descripstion: "lorem lorem", pages: 344 },
  { name: "book2", descripstion: "lorem fdad lorem", pages: 544 },
  { name: "book3", descripstion: "lorem lorem lorem", pages: 434 },
  { name: "book4", descripstion: "lorem lorem", pages: 34}
];

const bookJson =JSON.stringify(books);
console.log(bookJson);

fs.writeFileSync(newFile,bookJson)



