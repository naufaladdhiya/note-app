import { useEffect, useState, React, useContext } from "react";
import Swal from "sweetalert2";
import { LocaleContext } from "../context/localization.context";
import { searchNotes } from "../utils/local-data";
import { getActiveNotes, deleteNote, archiveNote } from "../utils/network-data";
import SearchNote from "./search-note.component";
import NoteList from "./note-list.component";
import HomeAction from "./buttons/button-home-action.component";

function NoteApp() {
  const [notes, setNotes] = useState([]);
  const [keyword, setKeyword] = useState("");
  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  function onSearch() {}

  const filteredNotes = searchNotes(notes, keyword);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchKeyword = searchParams.get("keyword");
    setKeyword(searchKeyword || "");
  }, []);

  const onSearchHandler = (e) => {
    setKeyword(e.target.value);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("keyword", e.target.value);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${searchParams.toString()}`
    );
  };

  const onDeleteHandler = async (id) => {
    try {
      await deleteNote(id);
      getActiveNotes().then(({ data }) => {
        setNotes(data);
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Catatan berhasil dihapus",
        width: 300,
        toast: true,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  const onArchiveHandler = async (id) => {
    try {
      await archiveNote(id);
      getActiveNotes().then(({ data }) => {
        setNotes(data);
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Catatan berhasil diarsipkan",
        width: 300,
        toast: true,
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {}, 1500);
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  return (
    <div className="relative">
      <h2 className="text-3xl font-bold text-center text-white">
        {locale === "en" ? "Notes List" : "Daftar Catatan"}
      </h2>

      <SearchNote onChangeHandler={onSearchHandler} keyword={keyword} />
      <NoteList
        notes={filteredNotes}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
        archived={false}
      />
      <div className="absolute bottom-2 right-2">
        <HomeAction />
      </div>
    </div>
  );
}

export default NoteApp;
