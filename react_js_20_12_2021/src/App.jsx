import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Date from "./Date";

function App() {
  const [initialCount, setInitialCount] = useState(0);
  return (
    <div className="App">
      <input
        type="number"
        placeholder="Insert a number"
        onChange={(e) => {
          setInitialCount(e.target.value);
        }}
      />
      <Counter initialCount={Number(initialCount)} />
      <hr />
      <Date />
    </div>
  );
}

export default App;
