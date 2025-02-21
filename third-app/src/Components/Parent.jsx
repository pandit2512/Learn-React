import React, { useState } from "react";
import Child from "./Child";

function Parent({ data }) {
  const [name, setName] = useState("Amex");

  const display = () => {
    alert("Hello");
  };

  return (
    <div>
      <h1>{data}</h1>
      <h1>Name is {name}</h1>
      <Child
        dataFromParent={data}
        displayParent={display}
        name={name}
        setName={setName}
      />
    </div>
  );
}

export default Parent;
