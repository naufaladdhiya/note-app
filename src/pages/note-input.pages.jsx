import { addNote } from '../utils/local-data';
import { AiFillCheckCircle } from 'react-icons/ai';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';

const NoteInput = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const formRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote({ title, body: content });
    formRef.current.reset();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Catatan berhasil ditambahkan',
      width: 300,
      toast: true,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleTitleChange = (event) => {
    setTitle('');
    setContent('');
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div className="container mx-auto justify-center items-center mt-6">
      <h1 className="text-2xl text-center text-secondary">Tambahkan catatan</h1>
      <form onSubmit={handleSubmit} ref={formRef}>
        <input
          type="text"
          placeholder="Judul..."
          className="input input-bordered input-primary w-full mt-4 pl-6 text-slate-400"
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Apa yang ingin kamu catat..."
          className="input input-lg input-bordered input-primary w-full mt-4 min-h-[330px] pb-64 text-slate-400"
          onChange={handleContentChange}
        />
        <button type="submit">
          <div
            className="fixed bottom-2 right-8 text-5xl cursor-pointer"
            title="Selesai"
          >
            <AiFillCheckCircle />
          </div>
        </button>
      </form>
    </div>
  );
};

export default NoteInput;
