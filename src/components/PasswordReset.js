import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const PasswordReset = ({
  handleReset,
  password,
  cPassword,
  setPassword,
  setcPassword,
  setResetToken,
}) => {
  let { id } = useParams();
  useEffect(() => {
    setResetToken(id);
  });
  return (
    <form style={{width:"50%"}}
      onSubmit={handleReset}
      className="signIn container d-flex flex-column gap-1 p-3"
    >
      <h2 className="display-6 text-center">Reset Password</h2>
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
      </div>
      <button type="submit" className="btn mt-3 btn-primary">
        Reset Password
      </button>
    </form>
  );
};

export default PasswordReset;
