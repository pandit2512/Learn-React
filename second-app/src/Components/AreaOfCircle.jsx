import React, { useState } from "react";

function AreaOfCircle() {
  const [radius, setRadius] = useState(0);

  return (
    <div>
      <input
        type="number"
        placeholder="Enter Radius"
        onChange={(r) => {
          setRadius(r.target.value);
        }}
      />

      <p>Radius:{radius}</p>
      <h1>Area Of Circle is {3.14 * radius * radius}</h1>
    </div>
  );
}

export default AreaOfCircle;
