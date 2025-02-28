import React from "react";
import "../Blog.css"; // Import external styles
import timeManagementImage from "./Images/time-management.jpg"; // Import the actual image
const Blog = () => {
  const title = "10 Tips for Effective Time Management";
  const author = "John Doe";
  const description =
    "In today's fast-paced world, effective time management is crucial for success. Learn 10 tips to improve your time management skills and boost productivity.";

  // Inline Styles
  const containerStyle = {
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    maxWidth: "400px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  };

  const titleStyle = {
    color: "#333",
    fontSize: "20px",
    fontWeight: "bold",
  };

  const authorStyle = {
    fontStyle: "italic",
    color: "#555",
  };

  const descriptionStyle = {
    marginTop: "10px",
    color: "#444",
  };

  return (
    <div style={containerStyle} className="blog-container">
      <img src={timeManagementImage} alt="Blog" className="blog-image" />
      <h2 style={titleStyle}>{title}</h2>
      <p style={authorStyle}>By {author}</p>
      <p style={descriptionStyle}>{description}</p>
    </div>
  );
};

export default Blog;
