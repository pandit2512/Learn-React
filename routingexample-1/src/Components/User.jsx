import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function User() {
  //Object destructuring: fetching properties userId from User Object
  //useParam() returns Object, and
  const { userId } = useParams();

  const navigate = useNavigate();
  //w/o using Object Destructuring
  // const params = useParams();

  return (
    <div>
      User
      <h1>{userId}</h1>
      {/*<h1>params.userId </h1>  */}
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

export default User;
