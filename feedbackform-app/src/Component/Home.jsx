import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="text-center">
      <h2>Welcome to Home Page</h2>
      <Link to="/login" className="btn btn-primary m-2">
        Login
      </Link>
      <Link to="/register" className="btn btn-success m-2">
        Register
      </Link>
    </div>
  );
}

export default Home;
