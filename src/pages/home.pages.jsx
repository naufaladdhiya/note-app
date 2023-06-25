/* eslint-disable react/jsx-no-bind */
import React, { useContext } from "react";
import { UserContext } from "../context/user.context";
import NoteApp from "../components/note-app";
import Login from "./login.pages";

function Home() {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="container relative py-5 mx-auto">
      {currentUser ? <NoteApp /> : <Login />}
    </div>
  );
}

export default Home;
