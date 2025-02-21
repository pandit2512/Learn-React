import React, { useState } from "react";

function CardInfo() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="container mt-4">
      <input
        type="text"
        className="form-control mb-3"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter some text"
      />
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Personal Detail</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Introduce Yourself
          </h6>
          <p className="card-text">{inputValue}</p>
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
