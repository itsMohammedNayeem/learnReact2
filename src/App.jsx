import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <>
      <h1>learn react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
