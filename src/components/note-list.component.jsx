import NoteItem from './note-item.component';

const NoteList = ({ notes, onArchive, onDelete, onUnarchive,archived }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-5">
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
};
export default NoteList;
