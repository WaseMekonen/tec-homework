import { Component } from "react";
import "./ToDoList.css";

export default class ToDoList extends Component {
  state = {
    input: "",
    todosArr: [],
  };

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let todos = {
      id: new Date().getTime(),
      task: this.state.input,
      isCompleted: false,
    };

    this.setState({
      input: "",
      todoArr: this.state.todosArr.push(todos),
    });

    console.log(this.state.todosArr);
  };

  deleteToDo = (index) => {
    const newTodos = this.state.todosArr;
    newTodos.splice(index, 1);
    this.setState({ todoArr: newTodos });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>

        <form className="addToDo">
          <div className="inputFiled">
            <input
              className="input"
              type="text"
              placeholder="Title.."
              value={this.state.input}
              onChange={this.inputHandler}
            />
            <input
              type="submit"
              className="add-Button"
              value="Add"
              onClick={this.onSubmit}
            />
          </div>

          <section>
            {this.state.todosArr.map((todo, i) => {
              return (
                <div className="todosList">
                  <p key={i}> {todo.task}</p>
                  <button onClick={() => this.deleteToDo(i)}>Delete</button>
                  <input key={i + 1} type="checkbox" />
                </div>
              );
            })}
          </section>
        </form>
      </div>
    );
  }
}
