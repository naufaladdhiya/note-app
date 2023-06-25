import React from "react";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";

function SignIn({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({ email, password });
  };
  return (
    <div>
      <h1>Sign in</h1>
      <form onSubmit={onSubmitHandler} className="login-input">
        <label htmlFor="email">
          <input
            className="w-full pl-6 mt-4 input input-bordered input-primary text-slate-400"
            type="email"
            id="email"
            value={email}
            onChange={onEmailChange}
          />
          Email
        </label>
        <label htmlFor="password">
          <input
            className="w-full pl-6 mt-4 input input-bordered input-primary text-slate-400"
            type="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
          />
          Pasword
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </label>
      </form>
    </div>
  );
}

export default SignIn;

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};
