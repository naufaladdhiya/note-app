import { useEffect, useState, React } from 'react';
import Swal from 'sweetalert2';
import {
  getArchivedNotes,
  unarchiveNote,
  deleteNote,
  searchNotes,
} from '../utils/local-data';
import NoteList from '../components/note-list.component';
import SearchNote from '../components/search-note.component';

function Archive() {
  const [archivedNotes, setArchivedNotes] = useState(() => getArchivedNotes());
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const filteredNotes = searchNotes(getArchivedNotes(), keyword);
    setArchivedNotes(filteredNotes);
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

  const onUnarchiveHandler = (id) => {
    unarchiveNote(id);
    setArchivedNotes(getArchivedNotes(id));
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Catatan berhasil diaktifkan',
      width: 300,
      toast: true,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const onDeleteHandler = (id) => {
    deleteNote(id);
    setArchivedNotes(getArchivedNotes(id));
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

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-center text-secondary text-2xl">Catatan Arsip</h1>
      <SearchNote onChangeHandler={onSearchHandler} keyword={keyword} />
      <NoteList
        notes={archivedNotes}
        onUnarchive={onUnarchiveHandler}
        onDelete={onDeleteHandler}
        archived
      />
    </div>
  );
}

export default Archive;
