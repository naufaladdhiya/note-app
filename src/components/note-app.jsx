import { useEffect, useState } from 'react';
import { searchNotes, getAllNotes } from '../utils/local-data';
import SearchNote from './search-note.component';
import NoteList from './note-list.component';
import HomeAction from './buttons/button-home-action.component';

const NoteApp = () => {
  const [notes, setNotes] = useState(() => getAllNotes());
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    setNotes(getAllNotes());
  }, []);

  useEffect(() => {
    const filteredNotes = searchNotes(getAllNotes(), keyword);
    setNotes(filteredNotes);
  }, [keyword]);

  const onSearch = (e) => {
    setKeyword(e.target.value);
    console.log(keyword);
  };

  return (
    <div className="relative">
      <SearchNote onChangeHandler={onSearch} keyword={keyword} />
      {notes.length > 0 ? (
        <NoteList notes={notes} />
      ):(
        <div className="text-center text-2xl text-blue-400 mt-6">Tidak ada catatan ditemukan...</div>
      )}
      <div className="absolute bottom-2 right-2">
        <HomeAction />
      </div>
    </div>
  );
};

export default NoteApp;
