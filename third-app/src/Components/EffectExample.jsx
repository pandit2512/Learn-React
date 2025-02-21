import React, { useEffect, useState } from "react";

function EffectExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Hello");
  }, [count]);

  return (
    <div>
      EffectExample
      <h1>You Clicked {count} times</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default EffectExample;
