import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils/index';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const NoteDetail = ({ title, body, createdAt }) => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-7">
      <div className="card w-full bg-primary-focus shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl text-secondary md:text-5xl">
            {title}
          </h2>
          <p className="text-md md:text-lg md:mt-4">
            {showFormattedDate(createdAt)}
          </p>
          <p className="text-md md:text-2xl md:mt-4">{body}</p>
        </div>
      </div>
    </div>
  );
};

const DetailNotFound = () => {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-7">
      <p className='text-2xl'>Note not found</p>
    </div>
  );
};

const DetailNotePage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(() => getNote(id));
  useEffect(() => {
    setNote(() => getNote(id));
  }, [id]);

  if (!note) {
    return <DetailNotFound />;
  }

  return <NoteDetail {...note} />;
};

export default DetailNotePage;
