const fs = require("fs");
const process = require("process");

const operation = process.argv[2];
const name = process.argv[3];
const author = process.argv[4];
const pages = process.argv[5];

let books;
try {
  books = fs.readFileSync("file.json", "utf8");
  books = JSON.parse(books);
} catch (error) {
  books = [];
}

switch (operation) {
  case "add":
    const book = { name, author, pages };
    let notExist = true;

    for (let i = 0; i < books.length; i++) {
      if (
        book.name == books[i].name &&
        book.author == books[i].author &&
        book.pages == books[i].pages
      ) {
        notExist = false;
      }
    }
    if (notExist) {
      books.push(book);
      console.log("the book is added to books librery");
    } else {
      console.log("the book is already exist!");
    }

    fs.writeFileSync("file.json", JSON.stringify(books));

    break;

  default:
    break;
}
