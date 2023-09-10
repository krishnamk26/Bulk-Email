import React from "react";
import { Link } from "react-router-dom";
import { FaSignInAlt } from "react-icons/fa";
import { ToastContainer, Zoom } from "react-toastify";

const SignUp = ({
  handleSignUp,
  email,
  setEmail,
  password,
  setPassword,
  username,
  setUsername,
  cPassword,
  setcPassword,
}) => {
  return (
    <form style={{width:"50%"}}
      onSubmit={handleSignUp}
      className="signIn container d-flex flex-column gap-1 p-3"
    >
      <h2 className="display-6 text-center">Sign Up</h2>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="off"
          required
        />
        <small className="form-text text-muted"></small>
      </div>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Username"
          autoComplete="off"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="cPassword">Confirm Password</label>
        <input
          type="password"
          className="form-control"
          id="cPassword"
          placeholder="Confirm Password"
          required
          value={cPassword}
          onChange={(e) => setcPassword(e.target.value)}
        />
        <small className="form-text text-muted"></small>
      </div>

      <button
        type="submit"
        className="btn btn-primary d-flex align-items-center gap-2 justify-content-center"
      >
        Sign Up <FaSignInAlt style={{ fontSize: "20px" }} />
      </button>
      <Link className="text-light text-decoration-none text-center" to={"/"}>
        <button type="button" className="btn btn-primary">
          Go to Login <FaSignInAlt style={{ fontSize: "20px" }} />
        </button>
      </Link>
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

export default SignUp;
