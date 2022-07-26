import React from 'react';
import { Link } from 'react-router-dom';
import dogs from './DogData';
import './DogList.css';

export default function DogList() {
  return (
    <div className="DogList">
      <h1 className="display-1 text-center mt-3 mb-5">Dog List!</h1>
      <div className="row">
        {dogs.map((d) => (
          <div className="Dog col-lg-4 text-center" key={d.name}>
            <Link to={`/dogs/${d.name}`}>
              <img src={d.src} alt={d.name} />
              <h3 className="underline mt-3">{d.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
