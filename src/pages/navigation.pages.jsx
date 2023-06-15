import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { CgNotes } from 'react-icons/cg';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navbar bg-base-100 flex justify-between items-center px-7 shadow-2xl rounded-2xl py-4">
        <div className="text-4xl text-warning">
          <Link to="./" className="flex items-center gap-1">
            <CgNotes />
            <p>Notes</p>
          </Link>
        </div>
        <div className="">
          <Link to="./archieve">
            <button className="btn btn-primary btn-md text-md">Arsip</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
