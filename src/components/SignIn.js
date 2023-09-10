import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, Zoom } from "react-toastify";
import { FaMailBulk, FaKey, } from "react-icons/fa";

const SignIn = ({ email, setEmail, password, setPassword, handleSignIn }) => {
  return (
    <form style={{width:"50%"}}
      onSubmit={handleSignIn}
      className="signIn container d-flex flex-column gap-3 p-2"
    >
      <h2 className="display-6 text-light text-center">
        Sign In <FaMailBulk />{" "}
      </h2>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          autoComplete="off"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small className="form-text text-muted"></small>
      </div>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <small className="form-text text-muted"></small>
      </div>
      <div className="form-group d-flex justify-content-between gap-1 px-1">
      
        <Link
          className="link-light btn btn-outline-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          to="signup"
        >
          Sign Up
        </Link>
        <Link
          className="link-light btn btn-outline-danger link-offset-0 link-underline-opacity-25 link-underline-opacity-100-hover"
          to="forgot"
        >
          <FaKey /> Forgot Password
        </Link> 
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        transition={Zoom}
        draggable={false}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />
    </form>
  );
};

export default SignIn;
