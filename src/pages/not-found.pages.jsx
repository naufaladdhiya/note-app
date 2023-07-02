import React from "react";
import { Link } from "react-router-dom";
import { BsFillBackspaceFill } from "react-icons/bs";
import { LocaleContext } from "../context/localization.context";

function NotFound() {
  const { locale } = React.useContext(LocaleContext);
  return (
    <div className="container mx-auto text-center mt-7">
      <h1 className="font-bold text-9xl text-slate-400">404</h1>
      <p className="mt-3 text-xl">
        {locale === "en" ? "Page Not Found" : "Halaman Tidak Ditemukan"}
      </p>
      <p className="mt-3">
        {locale === "en"
          ? "But don't worry, you can find many other things on our homepage."
          : "Tapi jangan khawatir, Anda dapat menemukan banyak hal lain diberanda kami."}
      </p>
      <Link to="/">
        <button
          className="mt-5 btn btn-primary btn-md rounded-2xl"
          type="button"
        >
          {locale === "en" ? "Back" : "Kembali"}
          <span className="text-lg">
            <BsFillBackspaceFill />
          </span>
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
