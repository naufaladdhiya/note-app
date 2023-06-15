import { BsFillTrashFill } from 'react-icons/bs';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';

const ButtonAction = ({ id, onDelete, onArchive, archived, onUnarchive }) => {
  return (
    <div className="flex gap-3">
      <button
        className="bg-red-500 p-1 rounded-lg text-slate-400"
        onClick={() => {
          onDelete(id);
        }}
        title="Hapus Catatan"
      >
        <BsFillTrashFill />
      </button>
      <div
        className="bg-green-500 p-1 rounded-lg text-slate-500"
        title="Arsipkan Catatan"
      >
        {archived === true ? (
          <button
            className="bg-green-500 p-1 rounded-lg text-slate-500"
            onClick={() => {
              onUnarchive(id);
            }}
            title="Aktifkan catatan"
          >
            <BiArchiveOut />
          </button>
        ) : (
          <button
            className="bg-green-500 p-1 rounded-lg text-slate-500"
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
};

export default ButtonAction;
