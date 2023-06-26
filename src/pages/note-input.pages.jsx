/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AiFillCheckCircle } from "react-icons/ai";
import useInput from "../hooks/useInput";
import { LocaleContext } from "../context/localization.context";
import { addNote } from "../utils/network-data";

function NoteInput() {
  const [title, setChangeTitle] = useInput();
  const [content, setContent] = useState("");
  const { locale } = useContext(LocaleContext);
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (note) => {
    try {
      const { error } = await addNote(note);
      if (!error) {
        navigate("/");
      }
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Catatan berhasil ditambahkan",
        width: 300,
        toast: true,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="container items-center justify-center mx-auto mt-6">
      <h1 className="text-3xl font-bold text-center text-white">
        {locale === "en" ? "Add Note" : "Tambah Catatan"}
      </h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit({ title, body: content });
        }}
        ref={formRef}
      >
        <input
          type="text"
          placeholder={locale === "en" ? "Title..." : "Judul..."}
          className="w-full pl-6 mt-4 input input-bordered input-primary text-slate-400"
          onChange={setChangeTitle}
          value={title}
        />
        <input
          type="text"
          placeholder={
            locale === "en"
              ? "What do you want to write..."
              : "Apa yang ingin kamu catat?..."
          }
          className="input input-lg input-bordered input-primary w-full mt-4 min-h-[330px] pb-64 text-slate-400"
          onChange={handleContentChange}
          value={content}
        />
        <button type="submit">
          <div
            className="fixed text-5xl cursor-pointer bottom-2 right-8"
            title={locale === "en" ? "Add Note" : "Tambah Catatan"}
          >
            <AiFillCheckCircle />
          </div>
        </button>
      </form>
    </div>
  );
}

export default NoteInput;
