import React from "react";
import { Link } from "react-router-dom";

const LoggedOut = () => {
  return (
    <div className="signIn container d-flex flex-column gap-3 p-2">
      <h2 className="display-6 text-center">User has been logged out!!! </h2>
      <p className="text-center">Kindly login again for access</p>
      <Link className="text-center" to="/">
        <button type="submit" className="btn btn-primary">
          Goto Login
        </button>
      </Link>
    </div>
  );
};

export default LoggedOut;
