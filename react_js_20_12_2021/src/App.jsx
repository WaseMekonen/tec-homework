import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Date from "./Date";

function App() {
  const [userInput, setUserInput] = useState(0);
  return (
    <div className="App">
      <input
        type="number"
        placeholder="Insert a number"
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <Counter userInput={Number(userInput)} />
      <hr />
      <Date/>
    </div>
  );
}

export default App;
