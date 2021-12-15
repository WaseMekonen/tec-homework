import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Component } from "react";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";

class App extends Component {
  state = {
    books: [
      {
        author: "Jack William",
        title: "The lion",
        pages: 432,
        img: "https://did.li/8obrl",
        summary: "the king of the animals is here",
      },
      {
        author: "Sandra jackon",
        title: "Black and White",
        pages: 231,
        img: "https://did.li/QdJNf",
        summary: "the simplest colors in the world",
      },
      {
        author: "Yohan Rayn",
        title: "Only Happy",
        pages: 212,
        img: "https://did.li/FL6Hw",
        summary: "A day without a smile is a wasted day",
      },
      {
        author: "Paul Smith",
        title: "The last train",
        pages: 526,
        img: "https://did.li/2FmTY",
        summary: "The last train left What will you do?",
      },
      {
        author: "Chris Miller",
        title: "Open the door",
        pages: 421,
        img: "https://did.li/WWxlC",
        summary:
          "The door is not an obstacle knock on it and you will discover a world",
      },
    ],
  };

  currentAuthor = "";
  currentTitle = "";
  currentSummary = "";

  setCurrentBook = (author, title, summary) => {
    this.currentAuthor = author;
    this.currentTitle = title;
    this.currentTitle = summary;
  };

  addBook = (author, title, pages, img, summary) => {
    const newBooksArr = [...this.state.books];
    newBooksArr.push({ author, title, pages, img, summary });
    this.setState({ books: newBooksArr });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link> <Link to="/Books">Books</Link>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              exact
              path="/Books"
              render={() => (
                <Books
                  books={this.state.books}
                  setCurrentBook={this.setCurrentBook}
                />
              )}
            ></Route>
            <Route
              exact
              path="/AddBook"
              render={() => <AddBook addBook={this.addBook} />}
            ></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
