import { Component } from "react";

export default class Counter extends Component {

  state = { counter: this.props.number };
  
  incresment =()=>{
    this.setState({counter:this.state.counter +1})
  }
  render() {
    return (
      <div>
        <button onClick={this.incresment}>Click To Incresment</button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}
