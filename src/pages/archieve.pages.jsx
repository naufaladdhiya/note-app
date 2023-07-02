import { useEffect, useState, React, useContext } from "react";
import Swal from "sweetalert2";
import { searchNotes } from "../utils/local-data";
import {
  getArchivedNotes,
  deleteNote,
  unarchiveNote,
} from "../utils/network-data";
import { LocaleContext } from "../context/localization.context";
import { ThemeContext } from "../context/theme.context";
import NoteList from "../components/note-list.component";
import onLoading from "../components/onLoading";
import SearchNote from "../components/search-note.component";

function Archive() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const { locale } = useContext(LocaleContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    setLoading(true);
    getArchivedNotes().then(({ data }) => {
      setNotes(data);
      setLoading(false);
    });
  }, []);

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

  const onUnarchiveHandler = async (id) => {
    try {
      await unarchiveNote(id);
      getArchivedNotes().then(({ data }) => {
        setNotes(data);
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Catatan berhasil diaktifkan",
        width: 300,
        toast: true,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  const onDeleteHandler = async (id) => {
    try {
      await deleteNote(id);
      getArchivedNotes().then(({ data }) => {
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

  return (
    <div className="container mx-auto mt-6">
      <h1
        className={
          theme === "dark"
            ? "text-3xl font-bold text-center text-white"
            : "text-3xl font-bold text-center text-black"
        }
      >
        {locale === "en" ? "Archieve List" : "Daftar Arsip"}
      </h1>
      <SearchNote onChangeHandler={onSearchHandler} keyword={keyword} />
      {loading ? (
        onLoading()
      ) : (
        <NoteList
          notes={filteredNotes}
          onArchive={onUnarchiveHandler}
          onDelete={onDeleteHandler}
          archived
        />
      )}
    </div>
  );
}

export default Archive;
