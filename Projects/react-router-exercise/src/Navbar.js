import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import dogs from './DogData';

export default function Navbar() {
  const dogLinks = dogs.map((dog) => (
    <li className="nav-item" key={dog.name}>
      <NavLink to={`/dogs/${dog.name}`} className="nav-link">
        {dog.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dogs">
          Dog App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink end to="/dogs" className="nav-link">
                Home
              </NavLink>
            </li>
            {dogLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
}
