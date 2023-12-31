import React, { useContext } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../context/localization.context";
import NoteItem from "./note-item.component";

function NoteList({ notes, onArchive, onDelete, archived }) {
  const { locale } = useContext(LocaleContext);
  if (!notes.length) {
    return (
      <p className="mt-6 text-2xl text-center text-blue-400">
        {locale === "id" ? "Tidak ada catatan..." : "Notes not found..."}
      </p>
    );
  }

  return (
    <div className="container grid gap-12 mx-auto mt-5 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          onArchive={onArchive}
          onDelete={onDelete}
          archieved={archived}
          {...note}
        />
      ))}
    </div>
  );
}
export default NoteList;

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};
