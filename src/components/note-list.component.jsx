import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './note-item.component';

function NoteList({
  notes, onArchive, onDelete, onUnarchive, archived,
}) {
  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-5">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          id={note.id}
          onArchive={onArchive}
          onDelete={onDelete}
          onUnarchive={onUnarchive}
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
  onUnarchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};
