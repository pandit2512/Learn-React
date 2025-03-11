import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard({ id, password, date, description }) {
  return (
    <div>
      <h2>Admin Feedback Dashboard</h2>
      <table class="table table-striped">
        <tr>
          <th>ID</th>
          <th>Feedback</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>{id}</td>
          <td>{description}</td>
          <td>{date}</td>
          <td>
            <button className="btn btn-primary ms-2">View</button>
            <button className="btn btn-primary ms-2">Edit</button>
            <button className="btn btn-danger ms-2">Delete</button>
          </td>
        </tr>
      </table>
      <div>
        <Link className="nav-link" to="/" style={{ color: "#898989" }}>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
