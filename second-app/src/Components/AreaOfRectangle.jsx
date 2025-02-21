import React, { useState } from "react";

function AreaOfRectangle() {
  const [length, setLength] = useState(0);
  const [breadth, setBreadth] = useState(0);

  const Area = (length, breadth) => {
    return length * breadth;
  };

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setLength(Number(e.target.value))} //onchange event
        placeholder="Enter Length"
      />
      <input
        type="number"
        onChange={(e) => setBreadth(Number(e.target.value))}
        placeholder="Enter Breadth"
      />
      <p>
        Length:{length} Breadth:{breadth}
      </p>
      <h1>Area Of reactangle is {Area(length, breadth)}</h1>
    </div>
  );
}

export default AreaOfRectangle;
