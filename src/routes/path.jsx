/* eslint-disable import/prefer-default-export */
import React from "react";
import { ProtectedRoute } from "./RoutesProtected";
import NoteApp from "../components/note-app";
import Archive from "../pages/archieve.pages";
import NoteInput from "../pages/note-input.pages";
import DetailNote from "../pages/note-detail.pages";
import NotFound from "../pages/not-found.pages";
import Login from "../pages/login.pages";
import Register from "../pages/register.pages";

export const paths = [
  {
    path: "/",
    element: (
      <ProtectedRoute mode="auth">
        <NoteApp />
      </ProtectedRoute>
    ),
  },
  {
    path: "/archieve",
    element: (
      <ProtectedRoute mode="auth">
        <Archive />
      </ProtectedRoute>
    ),
  },
  {
    path: "/notes/:id",
    element: (
      <ProtectedRoute mode="auth">
        <DetailNote />
      </ProtectedRoute>
    ),
  },
  {
    path: "/notes/new",
    element: (
      <ProtectedRoute mode="auth">
        <NoteInput />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: (
      <ProtectedRoute mode="public">
        <Login />
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectedRoute mode="public">
        <Register />
      </ProtectedRoute>
    ),
  },
];
