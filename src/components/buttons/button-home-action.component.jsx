import React, { useContext } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { LocaleContext } from "../../context/localization.context";

function HomeAction() {
  const { locale } = useContext(LocaleContext);
  return (
    <div
      className="fixed text-5xl cursor-pointer bottom-2 right-8"
      title={locale === "id" ? "Tambahkan Catatan" : "Add note"}
    >
      <Link to="/notes/new">
        <AiOutlinePlusCircle />
      </Link>
    </div>
  );
}

export default HomeAction;
