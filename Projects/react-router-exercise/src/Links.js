import React from 'react';
import DogList from './DogList';
import DogDetails from './DogDetails';
// import ErrorPage from './ErrorPage';
import { Routes, Route, Navigate } from 'react-router-dom';

export default function Links() {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList />} />
      <Route path="/dogs/:dogName" element={<DogDetails />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  );
}
