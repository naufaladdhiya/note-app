import React, { useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { LocaleContext } from "../context/localization.context";
import useInput from "../hooks/useInput";

function SignUp({ register }) {
  const [name, onNameChange] = useInput("");
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");
  const [confirmPassword, onConfirmPasswordChange] = useInput("");
  const { locale } = useContext(LocaleContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      register({
        name: name,
        email: email,
        password: password,
      });
    } else {
      alert("Password and password confirm must be same");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">
          {locale === "id" ? "Nama" : "Name"}
          <input
            className="w-full pl-6 my-2 input input-bordered input-primary text-slate-400"
            type="name"
            placeholder={
              locale === "id" ? "Masukkan Nama Anda..." : "Enter Your Name..."
            }
            id="name"
            value={name}
            onChange={onNameChange}
          />
        </label>
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
        <label htmlFor="password">
          Password
          <input
            className="w-full pl-6 my-2 input input-bordered input-primary text-slate-400"
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
        </label>
        <label htmlFor="confirmpassword" className="">
          Konfirmasi Password
          <input
            className="w-full pl-6 mt-2 input input-bordered input-primary text-slate-400"
            type="password"
            placeholder={
              locale === "id"
                ? "Konfirmasi Password Anda..."
                : "Confirm Your Password..."
            }
            id="confirmpassword"
            value={confirmPassword}
            onChange={onConfirmPasswordChange}
          />
          <div className="flex flex-col justify-end">
            <button type="submit" className="mt-4 btn btn-primary">
              {locale === "id" ? "Daftar" : "Sign Up"}
            </button>
            <p className="mt-3">
              {locale === "id"
                ? "Sudah punya akun? "
                : "Already have an account?"}
              <Link to="/login" className="text-blue-400">
                {locale === "id" ? "Masuk" : " Sign in"}
              </Link>
            </p>
          </div>
        </label>
      </form>
    </div>
  );
}

export default SignUp;

SignUp.propTypes = {
  register: PropTypes.func.isRequired,
};
