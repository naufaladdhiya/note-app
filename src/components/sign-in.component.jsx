import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LocaleContext } from "../context/localization.context";
import useInput from "../hooks/useInput";

function SignIn({ login }) {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({ email, password });
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler} className="login-input">
        <label htmlFor="email">
          Email
          <input
            className="w-full pl-6 my-2 input input-bordered input-primary text-slate-400"
            type="email"
            placeholder={
              locale === "id" ? "Masukkan Email Anda..." : "Enter Your Email..."
            }
            id="email"
            value={email}
            onChange={onEmailChange}
          />
        </label>
        <label htmlFor="password" className="">
          Pasword
          <input
            className="w-full pl-6 mt-2 input input-bordered input-primary text-slate-400"
            type="password"
            placeholder={
              locale === "id"
                ? "Masukkan Password Anda..."
                : "Enter Your Password..."
            }
            id="password"
            value={password}
            onChange={onPasswordChange}
          />
          <div className="flex flex-col justify-end">
            <button type="submit" className="mt-4 btn btn-primary">
              {locale === "id" ? "Masuk" : "Sign In"}
            </button>
            <p className="mt-3">
              {locale === "id" ? "Belum punya akun?" : "Don't have an account?"}
              <Link to="/register" className="text-blue-400">
                {locale === "id" ? " Daftar" : " Sign Up"}
              </Link>
            </p>
          </div>
        </label>
      </form>
    </div>
  );
}

export default SignIn;

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};
