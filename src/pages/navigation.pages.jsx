import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <Fragment>
      <div className="navbar bg-base-100 flex justify-between items-center px-7 shadow-2xl rounded-2xl py-4">
        <div className="text-2xl">
          <Link to="./">Logo</Link>
        </div>
        <div className="">
          <button className="btn btn-primary btn-md text-md">
            <Link to="./archieve">Arsip</Link>
          </button>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
