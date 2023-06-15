import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import showFormattedDate from '../utils/index';

function NoteDetail({ title, body, createdAt }) {
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
}

function DetailNotFound() {
  return (
    <div className="container mx-auto flex flex-col justify-center items-center mt-7">
      <p className="text-2xl">Note not found</p>
    </div>
  );
}

function DetailNotePage() {
  const { id } = useParams();
  const [note, setNote] = useState(() => getNote(id));
  useEffect(() => {
    setNote(() => getNote(id));
  }, [id]);

  if (!note) {
    return <DetailNotFound />;
  }

  return <NoteDetail {...note} />;
}

export default DetailNotePage;

NoteDetail.propTypes = {
  title: Proptypes.string.isRequired,
  body: Proptypes.string.isRequired,
  createdAt: Proptypes.string.isRequired,
};
