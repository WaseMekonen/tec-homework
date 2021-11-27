import "./App.css";
import { Component } from "react";
import ToDoList from "../ToDoList/ToDoList";
import Posts from "../Posts/Posts";
import Gallery from "../Gallery/Gallery";


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoList/>
        <Gallery/>
        <Posts/>
      </div>
    );
  }
}
