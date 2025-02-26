import React from "react";
import { useNavigate } from "react-router-dom";

function About() {
  //useNavigate returns function
  const navigate = useNavigate();

  return (
    <div>
      About
      {/* after clickin , should navigate to login page */}
      <button
        className="btn btn-outline-success"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login!
      </button>
      <button
        className="btn btn-outline-danger"
        onClick={() => {
          navigate(-1);
        }}
      >
        previous!
      </button>
    </div>
  );
}

export default About;
