import React from "react";
import { Link } from "react-router-dom";
import { FaKey } from "react-icons/fa";
import { ToastContainer, Zoom } from "react-toastify";

const ForgotPage = ({ handleForgot, email, setEmail }) => {
  return (
    <form style={{width:"50%"}}
      onSubmit={handleForgot}
      className="signIn container d-flex flex-column gap-3 p-2"
    >
      <h2 className="display-6 text-center">Forgot Password</h2>
      <div className="form-group d-flex flex-column gap-1">
        <label htmlFor="userName">Email</label>
        <input
          type="email"
          className="form-control"
          id="userName"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
          required
        />
        <small className="form-text text-muted"></small>
      </div>
      <button type="submit" className="btn btn-primary">
        <FaKey /> Reset
      </button>
      <Link className="text-light text-decoration-none text-center" to={"/"}>
        <button type="button" className="btn btn-primary">
          Go to Login
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

export default ForgotPage;
