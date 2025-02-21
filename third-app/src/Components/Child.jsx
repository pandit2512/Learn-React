import React from "react";

function Child({ dataFromParent, displayParent, name, setName }) {
  return (
    <div>
      Child
      <p>p tag from child Component {dataFromParent}</p>
      {/* child component will call parent function after clicking button */}
      <button onClick={displayParent}>Click</button>
      <p>Name from Child: {name}</p>
      <button
        onClick={() => {
          setName("Amex Jung");
        }}
      >
        change name
      </button>
    </div>
  );
}

export default Child;
