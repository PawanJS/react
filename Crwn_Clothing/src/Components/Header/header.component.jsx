import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../Firebase/firebase.utils';

import { ReactComponent as Logo } from '../../Assets/Logo/logo.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => {
  return (
    <header className="header">
      <Link to="/" className="logo-container">
        <Logo />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link to="/signin" className="option">
            SIgn In
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
