import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Home from "./Component/Home";
import FeedbackForm from "./Component/FeedbackForm";
import AdminDashboard from "./Component/AdminDashboard";

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feedbackform" element={<FeedbackForm />} />
          <Route path="/adminpanel" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
