import React, { useEffect, useState, useContext } from "react";
import Proptypes from "prop-types";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import showFormattedDate from "../utils/index";
import { LocaleContext } from "../context/localization.context";

function NoteDetail({ title, body, createdAt }) {
  const { locale } = useContext(LocaleContext);
  const languange = locale === "id" ? "id-ID" : "en-US";
  return (
    <div className="container flex flex-col items-center justify-center mx-auto mt-7">
      <div className="w-full shadow-xl card bg-[#F7D44C]">
        <div className="card-body">
          <h2 className="text-3xl text-black card-title md:text-5xl">
            {title}
          </h2>
          <p className="text-md md:text-lg text-slate-500 md:mt-4">
            {showFormattedDate(createdAt, languange)}
          </p>
          <p className="text-black text-md md:text-2xl md:mt-4">{body}</p>
        </div>
      </div>
    </div>
  );
}

function DetailNotFound() {
  return (
    <div className="container flex flex-col items-center justify-center mx-auto mt-7">
      <p className="text-2xl">Note not found</p>
    </div>
  );
}

function DetailNotePage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  const getNoteHandler = async () => {
    try {
      const { data } = await getNote(id);
      setNote(() => data);
    } catch (error) {
      throw new Error(error);
    }
  };

  useEffect(() => {
    getNoteHandler();
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
