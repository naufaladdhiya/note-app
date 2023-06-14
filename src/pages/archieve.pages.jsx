import { useEffect, useState } from 'react';
import {
  getArchivedNotes,
  unarchiveNote,
  deleteNote,
} from '../utils/local-data';
import NoteList from '../components/note-list.component';

const Archive = () => {
  const [archivedNotes, setArchivedNotes] = useState(() => getArchivedNotes());

  console.log(archivedNotes);

  useEffect(() => {}, []);

  const onUnarchiveHandler = (id) => {
    unarchiveNote(id);
    setArchivedNotes(getArchivedNotes(id));
  };

  const onDeleteHandler = (id) => {
    deleteNote(id);
    setArchivedNotes(getArchivedNotes(id));
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-center text-secondary text-xl mt-3">Catatan Arsip</h1>
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
