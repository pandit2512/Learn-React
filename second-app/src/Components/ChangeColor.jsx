import React, { useState } from "react";

function ChangeColor() {
  const [color, setColor] = useState("yellow");

  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-3"
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter color name or hexcode"
      />
      <div style={{ width: "18rem", height: "200px", backgroundColor: color }}>
        <h5 className="text-center text-white p-4">{color} Box</h5>
      </div>
    </div>
  );
}

export default ChangeColor;
