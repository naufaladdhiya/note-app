import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillBackspaceFill } from 'react-icons/bs';

function NotFound() {
  return (
    <div className="container mx-auto text-center mt-7">
      <h1 className="font-bold text-9xl text-slate-400">404</h1>
      <p className="mt-3 text-xl">Opps, kami tidak dapat menemukan halaman ini.</p>
      <p className="mt-3"> Tapi jangan khawatir, Anda dapat menemukan banyak hal lain diberanda kami.</p>
      <Link to="/">
        <button className="mt-5 btn btn-primary btn-md rounded-2xl" type="button">
          Kembali
          <span className="text-lg"><BsFillBackspaceFill /></span>
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
