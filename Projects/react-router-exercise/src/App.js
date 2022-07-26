import React from 'react';
import Navbar from './Navbar';
import Links from './Links';

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Links />
      </div>
    </div>
  );
}
