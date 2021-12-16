import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../Assets/Logo/logo.svg';

import './header.styles.scss';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/shop" className="option">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
