/* eslint-disable arrow-body-style */
import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { LocaleContext } from "../context/localization.context";
import { UserContext } from "../context/user.context";

function Navigation() {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { currentUser } = useContext(UserContext);
  return (
    <>
      <div className="flex items-center justify-between py-4 shadow-2xl navbar bg-base-100 px-7 rounded-2xl">
        <div className="navbar-start">
          <div className="text-4xl text-warning">
            <Link to="./" className="flex items-center gap-1">
              <CgNotes />
              <p>{locale === "id" ? "Catatan" : "Notes"}</p>
            </Link>
          </div>
        </div>
        {currentUser && (
          <div className="gap-3 navbar-center">
            <Link to="./">
              <button className="btn btn-primary btn-md text-md" type="button">
                {locale === "id" ? "Beranda" : "Home"}
              </button>
            </Link>
            <Link to="./archieve">
              <button className="btn btn-primary btn-md text-md" type="button">
                {locale === "id" ? "Arsip" : "Archive"}
              </button>
            </Link>
          </div>
        )}
        <div className="navbar-end">
          <button type="button" onClick={toggleLocale}>
            Toggle locale
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
