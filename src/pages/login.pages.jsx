/* eslint-disable react/jsx-no-bind */
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context";
import { LocaleContext } from "../context/localization.context";
import { ThemeContext } from "../context/theme.context";
import { login, putAccessToken } from "../utils/network-data";
import SignIn from "../components/sign-in.component";

function Login() {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);
  const signIn = async (user) => {
    const { error, data } = await login(user);
    if (!error) {
      putAccessToken(data.accessToken);
      setCurrentUser(data);
      navigate("/");
    }
  };
  return (
    <div className="container relative py-5 mx-auto">
      <h1
        className={
          theme === "dark"
            ? "text-3xl font-bold text-center text-white"
            : "text-3xl font-bold text-center text-black"
        }
      >
        {locale === "id" ? "Masuk dengan akun" : "Sign In with account"}
      </h1>
      <SignIn login={signIn} />
    </div>
  );
}

export default Login;
