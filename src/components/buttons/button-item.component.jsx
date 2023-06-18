import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import PropTypes from 'prop-types';

function ButtonAction({
  id, onDelete, onArchive, archived,
}) {
  return (
    <div className="flex gap-3">
      <button
        className="p-1 bg-red-500 rounded-lg text-slate-400"
        type="button"
        onClick={() => {
          onDelete(id);
        }}
        title="Hapus Catatan"
      >
        <BsFillTrashFill />
      </button>
      <div
        className="p-1 bg-green-500 rounded-lg text-slate-500"
        title="Arsipkan Catatan"
      >
        {archived === true ? (
          <button
            className="p-1 bg-green-500 rounded-lg text-slate-500"
            type="button"
            onClick={() => {
              onArchive(id);
            }}
            title="Aktifkan catatan"
          >
            <BiArchiveOut />
          </button>
        ) : (
          <button
            className="p-1 bg-green-500 rounded-lg text-slate-500"
            type="button"
            onClick={() => {
              onArchive(id);
            }}
            title="Arsipkan catatan"
          >
            <BiArchiveIn />
          </button>
        )}
      </div>
    </div>
  );
}

export default ButtonAction;

ButtonAction.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};
