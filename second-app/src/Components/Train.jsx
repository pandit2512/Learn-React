import React from "react";

function Details({ id, name }) {
  return (
    <h1>
      {id} {name}
    </h1>
  );
}

function NoDetails() {
  return <h1>No Details Found!</h1>;
}

function Train({ trainId, trainName }) {
  if (trainId && trainName) return <Details id={trainId} name={trainName} />;
  else return <NoDetails />;
}

export default Train;
