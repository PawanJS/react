import React from 'react';
import { Link } from 'react-router-dom';

import './menu-item.styles.scss';

const Menuitem = ({ title, id, imageUrl, size, linkUrl }) => (
  <div className={`${size} menu-item`} key={id}>
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    />
    <div className="content">
      <Link to={linkUrl}>
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </Link>
    </div>
  </div>
);

export default Menuitem;
