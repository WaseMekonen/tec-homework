import React, { useState } from "react";

export default function ThreeCounters() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  return (
    <>
      <h4>useState_3</h4>
      <h5>counter One: {counter1} </h5>
      <button onClick={() => setCounter1(counter1 + 1)}>
        Increment counter one
      </button>
      <h5>counter Two: {counter2} </h5>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment counter two
      </button>
      <h5>counter Three: {counter3} </h5>
      <button onClick={() => setCounter3(counter3 + 1)}>
        Increment counter three
      </button>
    </>
  );
}
