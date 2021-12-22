import React, { useEffect, useState } from "react";

const Counter = ({ initialCount }) => {
  const [counter, setCounter] = useState(initialCount);

  useEffect(() => {
    setCounter(initialCount);
  }, [initialCount]);

  return (
    <div>
      <h4>{counter}</h4>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
