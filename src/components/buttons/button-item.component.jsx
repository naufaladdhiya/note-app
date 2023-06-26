import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import PropTypes from "prop-types";
import { LocaleContext } from "../../context/localization.context";

function ButtonAction({ id, onDelete, onArchive, archived }) {
  const { locale } = useContext(LocaleContext);
  return (
    <div className="flex gap-3">
      <button
        className="p-1 bg-red-500 rounded-lg text-slate-400"
        type="button"
        onClick={() => {
          onDelete(id);
        }}
        title={locale === "id" ? "Hapus catatan" : "Delete note"}
      >
        <BsFillTrashFill />
      </button>
      <div
        className="p-1 bg-green-500 rounded-lg text-slate-500"
        title={locale === "id" ? "Arsipkan catatan" : "Archive note"}
      >
        {archived === true ? (
          <button
            className="p-1 bg-green-500 rounded-lg text-slate-500"
            type="button"
            onClick={() => {
              onArchive(id);
            }}
            title={locale === "id" ? {} : "Archive note"}
          >
            <BiArchiveOut />
          </button>
        ) : (
          <button
            className="p-1 bg-green-500 rounded-lg text-slate-500"
            type="button"
            onClick={() => {
              onArchive(id);
            }}
            title={locale === "id" ? "Arsipkan catatan" : "Archive note"}
          >
            <BiArchiveIn />
          </button>
        )}
      </div>
    </div>
  );
}

export default ButtonAction;

ButtonAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};
