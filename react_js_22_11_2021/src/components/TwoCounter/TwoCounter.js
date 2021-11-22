import { Component } from "react";

export default class TwoCounters extends Component {
  state = { counter: 0 };

  incresement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.incresement}>click to Incresment </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
