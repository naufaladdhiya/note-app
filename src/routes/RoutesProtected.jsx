/* eslint-disable import/prefer-default-export */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../context/user.context";

export function ProtectedRoute({ children, mode }) {
  const { currentUser } = useContext(UserContext);
  const location = useLocation();

  if (!currentUser && mode === "auth") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (currentUser && mode === "public") {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.string.isRequired,
};
