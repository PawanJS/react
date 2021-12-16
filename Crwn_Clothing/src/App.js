import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/Home-Page/home-page.component';
import ShopPage from './Pages/Shop-Page/shop-page.component';
import Header from './Components/Header/header.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
