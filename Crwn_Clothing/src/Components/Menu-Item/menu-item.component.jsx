import React from 'react';

import './menu-item.styles.scss';

const Menuitem = ({ title, id, imageUrl, size }) => (
  <div className={`${size} menu-item`} key={id}>
    <div
      style={{ backgroundImage: `url(${imageUrl})` }}
      className="background-image"
    />
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default Menuitem;
