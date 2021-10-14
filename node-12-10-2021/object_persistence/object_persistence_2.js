const fs = require("fs");

const booksJson = fs.readFileSync("books.json", "utf-8");
const book = JSON.parse(booksJson);

let shortPageBook = book[0];
for (let i = 1; i < book.length; i++) {
  if (shortPageBook.pages > book[i].pages) {
    shortPageBook = book[i];
  }
}
console.log(shortPageBook);
