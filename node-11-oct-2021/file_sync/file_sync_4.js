const process =require("process");
const fs = require("fs");
const file = process.argv[2];
const book = {name : "tarzan", pages: 344}
const jsonBook = JSON.stringify(book);

const content = fs.writeFileSync(file,jsonBook);

console.log(content);
