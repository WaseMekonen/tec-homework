import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class AddBook extends Component {
  state = {
    redirectToBooks: false,
    author: "",
    title: "",
    pages: 0,
    img: "",
    summary: "",
  };

  render() {
    if (this.state.redirectToBooks) {
      return <Redirect to="/Books" />;
    }

    return (
      <div>
        <h1>Add Book Page</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault(),
              this.props.addBook(
                this.state.author,
                this.state.title,
                this.state.pages,
                this.state.img,
                this.state.summary
              ),
              this.setState({ redirectToBooks: true });
          }}
        >
          Author:{" "}
          <input
            type="text"
            onChange={(e) => {
              this.setState({ author: e.target.value });
            }}
          />
          <br />
          Title:
          <input
            type="text"
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          />
          <br />
          Pages:
          <input
            type="number"
            onChange={(e) => {
              this.setState({ pages: e.target.value });
            }}
          />
          <br />
          Image:
          <input
            type="text"
            onChange={(e) => {
              this.setState({ img: e.target.value });
            }}
          />
          <br />
          Summary:
          <textarea
            cols="30"
            rows="10"
            onChange={(e) => {
              this.setState({ summary: e.target.value });
            }}
          ></textarea>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}

// <form
//             onSubmit={
//               (this.props.AddBook(
//                 this.state.author,
//                 this.state.title,
//                 this.state.pages,
//                 this.state.img,
//                 this.state.summary
//               ),
//               this.setState({ redirectToBooks: true }))
//             }
//           >
//             Author:
//             <input
//               type="text"
//               onChange={(e) => {
//                 this.setState({ author: e.target.value });
//               }}
//             />
//             <br />
//             Title:
//             <input
//               type="text"
//               onChange={(e) => {
//                 this.setState({ title: e.target.value });
//               }}
//             />
//             <br />
//             Pages:
//             <input
//               type="number"
//               onChange={(e) => {
//                 this.setState({ pages: e.target.value });
//               }}
//             />
//             <br />
//             Image:
//             <input
//               type="text"
//               onChange={(e) => {
//                 this.setState({ img: e.target.value });
//               }}
//             />
//             <br />
//             Summary:
//             <textarea cols="30" rows="10" onChange={(e) => {
//                 this.setState({ summary: e.target.value });
//               }}></textarea >
//             <button>Add</button>
//           </form>
