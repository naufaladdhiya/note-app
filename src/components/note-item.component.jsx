import { Link } from 'react-router-dom';
import ButtonAction from './buttons/button-item.component';
import { showFormattedDate } from '../utils/index';

const NoteItem = ({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  onUnarchive,
  archieved,
}) => {
  return (
    <div className="card w-72 bg-primary-focus shadow-xl relative">
      <div className="card-body flex-grow-0">
        <h2 className="card-title text-secondary">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h2>
        <p>{showFormattedDate(createdAt)}</p>
        <p className="mb-5">{body}</p>
        <div className="absolute bottom-3 right-6">
          <div className="card-actions justify-end text-2xl">
            <ButtonAction
              id={id}
              onDelete={onDelete}
              onArchive={onArchive}
              archieved={archieved}
              onUnarchive={onUnarchive}
              archived={archieved}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
