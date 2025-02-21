import React, { useState } from "react";

function PrintTable() {
  const [number, setNumber] = useState(0);

  const generateTable = (num) => {
    let table = [];
    for (let i = 1; i <= 10; i++) {
      table.push(
        <tr key={i}>
          <td>{num}</td>
          <td>x</td>
          <td>{i}</td>
          <td>=</td>
          <td>{num * i}</td>
        </tr>
      );
    }
    return table;
  };

  return (
    <div className="container mt-4">
      <input
        type="number"
        className="form-control mb-3"
        onChange={(e) => setNumber(Number(e.target.value))}
        placeholder="Enter a number"
      />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Number</th>
            <th>Operation</th>
            <th>Multiplier</th>
            <th>Equals</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>{generateTable(number)}</tbody>
      </table>
    </div>
  );
}

export default PrintTable;
