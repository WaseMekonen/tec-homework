import { Component } from "react";

export default class TodoList extends Component {
  state = {
    userInput: "",
    userMessions: [],
    isCompleted: false,
  };

  userTasks = [];

  inputHander = (e) => {
    this.setState({ userInput: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    e.target.reset();
    if (this.state.userInput == "") {
      return;
    }
    {
      const task = {
        title: this.state.userInput,
        id: new Date().getTime(),
        isCompleted: this.state.isCompleted,
      };
      this.userTasks.push(task);
      this.setState({ userMessions: this.userTasks });
      this.setState({ userInput: "" });
    }
  };

  deleteHandelr = (index) => {
    const tempArr = this.state.userMessions;
    tempArr.splice(index, 1);
    this.setState({ userMessions: tempArr });
  };

  checkboxHandler = (e, id) => {
    let temp = this.state.userMessions;
    temp[e.target.id].isCompleted = e.target.checked;
    this.setState({ userMessions: temp });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <input type="text" onChange={this.inputHander} />
          <button>Add</button>
        </form>
        {this.state.userMessions.map((mession, i) => {
          return (
            <div key={mession.id}>
              <p>
                {mession.title}
                <button
                  onClick={() => {
                    this.deleteHandelr(i);
                  }}
                >
                  Delete
                </button>{" "}
                <input type="checkbox" id={i} onClick={this.checkboxHandler} />
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
