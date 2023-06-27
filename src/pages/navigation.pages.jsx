/* eslint-disable arrow-body-style */
import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { CgNotes } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { BsFillMoonFill, BsSunFill } from "react-icons/bs";
import { LocaleContext } from "../context/localization.context";
import { UserContext } from "../context/user.context";
import { putAccessToken } from "../utils/network-data";
import { ReactComponent as Id } from "../assets/id.svg";
import { ReactComponent as En } from "../assets/en.svg";
import { ThemeContext } from "../context/theme.context";

function Navigation() {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const logout = () => {
    putAccessToken(null);
    setCurrentUser(null);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-4 py-4 shadow-2xl navbar bg-base-100 px-7 rounded-2xl md:flex-row">
        <div className="justify-center navbar-start md:justify-start">
          <div className="text-4xl text-warning">
            <Link to="./" className="flex items-center gap-1">
              <CgNotes className="text-md md:text-4xl" />
              <p className="text-sm md:text-2xl">
                {locale === "id" ? "Catatan" : "Notes"}
              </p>
            </Link>
          </div>
        </div>
        {currentUser && (
          <div className="flex gap-3 navbar-center">
            <Link to="./">
              <button
                className="text-sm btn btn-primary btn-sm md:btn-md"
                type="button"
              >
                {locale === "id" ? "Beranda" : "Home"}
              </button>
            </Link>
            <Link to="./archieve">
              <button
                className="text-sm btn btn-primary btn-sm md:btn-md"
                type="button"
              >
                {locale === "id" ? "Arsip" : "Archive"}
              </button>
            </Link>
          </div>
        )}
        <div className="flex justify-center gap-3 navbar-end md:justify-end">
          <button
            type="button"
            className="btn btn-sm btn-primary md:btn-md"
            onClick={toggleLocale}
            title={locale === "id" ? "Ganti Bahasa" : "Change Language"}
          >
            {locale === "id" ? <En className="w-6" /> : <Id className="w-6" />}
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm md:btn-md"
            onClick={toggleTheme}
            title={locale === "id" ? "Ganti Tema" : "Change Theme"}
          >
            {theme === "dark" ? (
              <BsSunFill className="text-xl" />
            ) : (
              <BsFillMoonFill className="text-xl" />
            )}
          </button>
        </div>
        {currentUser && (
          <button
            type="button"
            className="text-md btn btn-primary btn-sm md:btn-md md:text-2xl"
            title={locale === "id " ? "Keluar" : "Logout"}
            onClick={logout}
          >
            <FiLogOut />
          </button>
        )}
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
