/* eslint-disable react/jsx-no-bind */
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context";
import { login, putAccessToken } from "../utils/network-data";
import SignIn from "../components/sign-in.component";

function Login() {
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);
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
      <h1>Masuk dengan akun</h1>
      <SignIn login={signIn} />
    </div>
  );
}

export default Login;

// Login.propTypes = {
//   loginSucess: PropTypes.func.isRequired,
// };
