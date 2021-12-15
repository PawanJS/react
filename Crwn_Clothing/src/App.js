import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/Home-Page/home-page.component';
import ShopPage from './Pages/Shop-Page/shop-page.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
