import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage/homepage.component';

import './App.css';

const Hats = () => {
  return <div>I am hats</div>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/hats" element={<Hats />} />
      </Routes>
    </div>
  );
}

export default App;
