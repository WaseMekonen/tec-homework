import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Books.css";

export default class Books extends Component {
  state = {
    redirectToAddBook: false,
    redirectToBookDetails: false,
  };

  render() {
    if (this.state.redirectToAddBook) {
      return <Redirect to="/AddBook" />;
    }

    if (this.state.redirectToBookDetails) {
      return <Redirect to="/BookDetails" />;
    }
    const booksElement = this.props.books.map((book, index) => (
      <tr key={index}>
        <td>{book.author}</td>
        <td>
          {book.title}
          <button
            onClick={() => {
              this.props.setCurrentBook(book.author, book.title, book.summary),
                this.setState({ redirectToBookDetails: true });
            }}
          >
            Details
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h1>Books Page</h1>
        <div className="table-container">
          <table>
            <tr>
              <th>Author</th>
              <th>Title</th>
            </tr>
            {booksElement}
          </table>
          <div className="addbook">
            <button
              onClick={() => {
                this.setState({ redirectToAddBook: true });
              }}
            >
              Add books page
            </button>
          </div>
        </div>
      </div>
    );
  }
}
