import React, { useState } from "react";

function IsLoggedIn() {
  const isLoggedIn = true;

  const [loggedin, setloggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <h1>Welcome back, User!</h1> : <button>Login</button>}

      {/* ======================================== */}
      {loggedin ? (
        <>
          <h1>Logged in!</h1>
          <button
            onClick={() => {
              setloggedIn(false);
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Logged Out!</h1>
          <button
            onClick={() => {
              setloggedIn(true);
            }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default IsLoggedIn;
