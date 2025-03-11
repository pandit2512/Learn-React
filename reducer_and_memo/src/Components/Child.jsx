import React, { useEffect } from "react";

function Child() {
  useEffect(() => {
    console.log("Child Component Rendered");
  });

  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
}

// Below is the way to perform Memoization ==> React.memo(Child)
export default React.memo(Child);
