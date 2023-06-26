/* eslint-disable react/jsx-no-bind */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/network-data";
import { LocaleContext } from "../context/localization.context";
import SignUp from "../components/sign-up.component";

function Register() {
  const { locale } = useContext(LocaleContext);
  const navigate = useNavigate();
  async function onRegister(user) {
    const { error } = await register(user);
    if (!error) {
      navigate("/login");
    }
  }
  return (
    <div className="container relative py-5 mx-auto">
      <h1 className="text-3xl font-bold text-center text-white">
        {locale === "id" ? "Daftar Akun" : "Create Account"}
      </h1>
      <SignUp register={onRegister} />
    </div>
  );
}

export default Register;
