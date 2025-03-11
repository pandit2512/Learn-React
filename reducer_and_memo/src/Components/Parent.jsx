import React, { useEffect, useState } from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = useState(0);
  const [propValue, setPropValue] = useState(0);

  useEffect(() => {
    console.log("Parent Component Render");
  });

  const changePropValue = () => {
    if (count % 10 == 0) setPropValue(count);
  };

  //================
  const increment = () => {
    setCount(count + 1);
    changePropValue();
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <div className="border border-dark container p-3">
      <p>Memoization example:</p>
      <hr />
      <h2>Parent Counter: {count}</h2>
      <button className="btn btn-success mx-4" onClick={increment}>
        Increment
      </button>
      <button className="btn btn-danger " onClick={decrement}>
        Decrement
      </button>

      <Child propValue={propValue} />
    </div>
  );
}

export default Parent;
