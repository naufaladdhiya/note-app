import React from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function HomeAction() {
  return (
    <div className="fixed bottom-2 right-8 text-5xl cursor-pointer" title="Tambahkan catatan">
      <Link to="/notes/new">
        <AiOutlinePlusCircle />
      </Link>
    </div>
  );
}

export default HomeAction;
