import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext } from "./context/user.context";
import Home from "./pages/home.pages";
import Navigation from "./pages/navigation.pages";
import Archieve from "./pages/archieve.pages";
import DetailNote from "./pages/note-detail.pages";
import NoteInput from "./pages/note-input.pages";
import NotFound from "./pages/not-found.pages";
import Login from "./pages/login.pages";

function App() {
  // const { currentUser } = useContext(UserContext);
  // if (!currentUser) {
  //   window.location.href = '/login';
  // }
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/archieve" element={<Archieve />} />
        <Route path="/notes/:id" element={<DetailNote />} />
        <Route path="/notes/new" element={<NoteInput />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
