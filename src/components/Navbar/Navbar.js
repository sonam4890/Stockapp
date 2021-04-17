import React from "react";
import { Link} from 'react-router-dom';

const navbar = () => {
  return (
    <nav className="navbar  navbar-dark bg-dark">
      <div className="container-fluid mx-5">
        <Link className="navbar-brand" to="#">
          Stock App
        </Link>
      </div>
    </nav>
  );
};

export default navbar;
