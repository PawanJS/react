import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage/homepage.component';

import './App.css';

const Hats = () => {
  return <h1>I am hats</h1>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop/hats" element={<Hats />} />
      </Routes>
    </div>
  );
}

export default App;
