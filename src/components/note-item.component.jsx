import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import ButtonAction from './buttons/button-item.component';
import showFormattedDate from '../utils/index';

function NoteItem({
  id,
  title,
  body,
  createdAt,
  onDelete,
  onArchive,
  archieved,
}) {
  return (
    <div className="relative shadow-xl card bg-primary-focus">
      <div className="flex-grow-0 card-body">
        <h2 className="card-title text-secondary">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h2>
        <p className="text-warning">{showFormattedDate(createdAt)}</p>
        <p className="pb-5">{body}</p>
        <div className="absolute bottom-3 right-6">
          <div className="justify-end text-2xl card-actions">
            <ButtonAction
              id={id}
              onDelete={onDelete}
              onArchive={onArchive}
              archieved={archieved}
              archived={archieved}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;

NoteItem.propTypes = {
  id: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  body: Proptypes.string.isRequired,
  createdAt: Proptypes.string.isRequired,
  onDelete: Proptypes.func.isRequired,
  onArchive: Proptypes.func.isRequired,
  archieved: Proptypes.bool.isRequired,
};
