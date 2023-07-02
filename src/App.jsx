/* eslint-disable react/no-array-index-key */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { paths } from "./routes/path";
import Home from "./pages/home.pages";
import Navigation from "./pages/navigation.pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {paths.map((item, index) => (
          <Route key={index} {...item} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
