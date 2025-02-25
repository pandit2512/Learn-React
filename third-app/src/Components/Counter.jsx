import React, { useEffect, useState } from "react";

//TOPIC: CleanUp Function
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(count);
    }, 5000);

    //Cleanup Function

    return () => {
      console.log("cleanup function");
      clearTimeout(timeout);
    };
  }, [count]);

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me!
      </button>
    </div>
  );
}

export default Counter;
