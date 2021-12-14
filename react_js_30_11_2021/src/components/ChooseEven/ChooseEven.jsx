import { Component } from "react";

export default class ChooseEven extends Component {
  state = {
    numbers: [],
    userTime: 0,
    seconds: 0,
  };

  countEven = 0;
  userID = null;

  componentDidMount() {
    this.startGame();
  }

  restartGame = () => {
    const tempNumbers = new Array(10)
      .fill(0)
      .map(() => Math.floor(Math.random() * 20 + 1));
    tempNumbers.map((number) => (number % 2 == 0 ? this.countEven++ : null));
    console.log(this.countEven);
    this.setState({ numbers: tempNumbers });
  };

  startGame = () => {
    this.restartGame();
    this.userID = setInterval(() => {
      this.setState({ seconds: this.state.seconds + 1 });
    }, 1000);
  };

  clickHandler = (e, num) => {
    if (num % 2 === 0) {
      e.target.disabled = true;
      this.countEven--;
      if (this.countEven == 0) {
        alert(`Game Over-Your time is :${this.state.seconds}`);
        this.setState({ seconds: (this.state.seconds = 0) });
        clearInterval(this.userID);
      }
    } else if (num % 2 !== 0) {
      this.setState({ seconds: this.state.seconds + 1 });
    }
  };

  render() {
    return (
      <div>
        {this.state.numbers.map((num, i) => (
          <button
            key={i}
            onClick={(e) => {
              this.clickHandler(e, num);
            }}
          >
            {num}
          </button>
        ))}
        <div>
          <p>your time is: {this.state.seconds}</p>
        </div>
        <button onClick={this.startGame}>Start Game</button>
      </div>
    );
  }
}

// choose_even_game	"// ********* Task ChooseEven
// --- rand 10 numbers integer between 1,20
// --- show them on the dom on a row
// --- start clock
// --- click all even numbers and mark per click (greyed ? disabled ?)
// --- show elapsed second and 'Game Over' after success

// ******** advanced
// --- click odd number will punish by adding 1 sec to the time
// --- put time in history (local storage)
// --- show history
// --- show items in two rows
// --- start button
// --- display elapsed seconds and 'Game Over' in Message component
// --- display each number in Item component
// "
