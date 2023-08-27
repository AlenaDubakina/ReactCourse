import React from 'react';
import { useState } from 'react';

const Counter = function () {
  const [count, setCount] = useState(0);
  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Dicrement</button>
    </div>
  );
};
export default Counter;
