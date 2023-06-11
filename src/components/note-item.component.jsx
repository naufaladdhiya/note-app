import { Link } from 'react-router-dom';
import {showFormattedDate} from '../utils/index'

const NoteItem = ({ id, title, body, createdAt }) => {
  return (
    <div className="card w-72 bg-primary-focus shadow-xl">
      <div className="card-body flex-grow-0">
        <h2 className="card-title text-secondary"><Link to={`/notes/${id}`}>{title}</Link></h2>
        <p>{showFormattedDate(createdAt)}</p>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default NoteItem;
