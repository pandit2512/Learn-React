import React from "react";
import { useLoginContext } from "../Login";

function A() {
  const { login } = useLoginContext();

  return (
    <div>
      <hr />
      <h1>A component</h1>
      {login ? "You are Logged in" : "You are Logged Out"}
    </div>
  );
}

export default A;
