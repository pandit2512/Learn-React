import React from "react";

function BlogDetails({ id, author, content }) {
  return (
    <div>
      BlogDetails
      <li>ID: {id}</li>
      <li>Author: {author}</li>
      <li>Content: {content}</li>
    </div>
  );
}

export default BlogDetails;
