import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './Pages/Home-Page/home-page.component';
import ShopPage from './Pages/Shop-Page/shop-page.component';
import Header from './Components/Header/header.component';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<SignInAndSignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
