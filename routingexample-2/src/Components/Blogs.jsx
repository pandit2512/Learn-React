import React from "react";
import { Outlet } from "react-router-dom";

function Blogs() {
  return (
    <div>
      Blogs
      <Outlet />
    </div>
  );
}

export default Blogs;
