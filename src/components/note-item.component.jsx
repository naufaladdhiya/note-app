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
  onUnarchive,
  archieved,
}) {
  return (
    <div className="card bg-primary-focus shadow-xl relative">
      <div className="card-body flex-grow-0">
        <h2 className="card-title text-secondary">
          <Link to={`/notes/${id}`}>{title}</Link>
        </h2>
        <p className="text-warning">{showFormattedDate(createdAt)}</p>
        <p className="pb-5">{body}</p>
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
}

export default NoteItem;

NoteItem.propTypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  body: Proptypes.string.isRequired,
  createdAt: Proptypes.string.isRequired,
  onDelete: Proptypes.func.isRequired,
  onArchive: Proptypes.func.isRequired,
  onUnarchive: Proptypes.func.isRequired,
  archieved: Proptypes.bool.isRequired,
};
