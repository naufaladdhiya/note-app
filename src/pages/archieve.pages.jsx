import { useEffect, useState } from 'react';
import {
  getArchivedNotes,
  unarchiveNote,
  deleteNote,
  searchNotes,
} from '../utils/local-data';
import NoteList from '../components/note-list.component';
import SearchNote from '../components/search-note.component';
import Swal from 'sweetalert2';

const Archive = () => {
  const [archivedNotes, setArchivedNotes] = useState(() => getArchivedNotes());
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const filteredNotes = searchNotes(getArchivedNotes(), keyword);
    setArchivedNotes(filteredNotes);
  }, [keyword]);

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

  const onSearchHandler = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="container mx-auto mt-6">
      <h1 className="text-center text-secondary text-2xl">
        Catatan Arsip
      </h1>
      <SearchNote onChangeHandler={onSearchHandler} keyword={keyword} />
      <NoteList
        notes={archivedNotes}
        onUnarchive={onUnarchiveHandler}
        onDelete={onDeleteHandler}
        archived={true}
      />
    </div>
  );
};

export default Archive;
