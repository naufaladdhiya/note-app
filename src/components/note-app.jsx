import { useEffect, useState, React } from 'react';
import Swal from 'sweetalert2';
import {
  searchNotes,
  deleteNote,
  archiveNote,
  getActiveNotes,
} from '../utils/local-data';
import SearchNote from './search-note.component';
import NoteList from './note-list.component';
import HomeAction from './buttons/button-home-action.component';

function NoteApp() {
  const [notes, setNotes] = useState((id) => getActiveNotes(id));
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const filteredNotes = searchNotes(getActiveNotes(), keyword);
    setNotes(filteredNotes);
  }, [keyword]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchKeyword = searchParams.get('keyword');
    setKeyword(searchKeyword || '');
  }, []);

  const onSearchHandler = (e) => {
    setKeyword(e.target.value);
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('keyword', e.target.value);
    window.history.replaceState(
      {},
      '',
      `${window.location.pathname}?${searchParams.toString()}`,
    );
  };

  const onDeleteHandler = (id) => {
    deleteNote(id);
    setNotes(getActiveNotes(id));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Catatan berhasil dihapus',
      width: 300,
      toast: true,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const onArchiveHandler = (id) => {
    archiveNote(id);
    setNotes(getActiveNotes(id));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Catatan berhasil diarsipkan',
      width: 300,
      toast: true,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="relative">
      <h2 className="text-center text-2xl text-blue-400">Daftar Catatan</h2>

      <SearchNote onChangeHandler={onSearchHandler} keyword={keyword} />
      {notes.length > 0 ? (
        <NoteList
          notes={notes}
          onDelete={onDeleteHandler}
          onArchive={onArchiveHandler}
          archived={false}
        />
      ) : (
        <div className="text-center text-2xl text-blue-400 mt-6">
          Tidak ada catatan ditemukan...
        </div>
      )}
      <div className="absolute bottom-2 right-2">
        <HomeAction />
      </div>
    </div>
  );
}

export default NoteApp;
