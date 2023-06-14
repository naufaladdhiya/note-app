import { useEffect, useState } from 'react';
import {
  searchNotes,
  deleteNote,
  archiveNote,
  getActiveNotes,
} from '../utils/local-data';
import SearchNote from './search-note.component';
import NoteList from './note-list.component';
import HomeAction from './buttons/button-home-action.component';

const NoteApp = () => {
  const [notes, setNotes] = useState((id) => getActiveNotes(id));
  const [keyword, setKeyword] = useState('');

  console.log(notes);

  useEffect(() => {
    const filteredNotes = searchNotes(getActiveNotes(), keyword);
    setNotes(filteredNotes);
  }, [keyword]);

  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  const onDeleteHandler = (id) => {
    deleteNote(id);
    setNotes(getActiveNotes(id));
  };

  const onArchiveHandler = (id) => {
    archiveNote(id);
    setNotes(getActiveNotes(id));
  };

 

  return (
    <div className="relative">
      <SearchNote onChangeHandler={onSearch} keyword={keyword} />
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
};

export default NoteApp;
