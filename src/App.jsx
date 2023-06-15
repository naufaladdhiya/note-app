import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home.pages';
import Navigation from './pages/navigation.pages';
import Archieve from './pages/archieve.pages';
import DetailNote from './pages/note-detail.pages';
import NoteInput from './pages/note-input.pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/archieve" element={<Archieve />} />
        <Route path="/notes/:id" element={<DetailNote />} />
        <Route path="/notes/new" element={<NoteInput />} />
      </Route>
    </Routes>
  );
}

export default App;
