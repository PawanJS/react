import React from 'react';
import { useNavigate } from 'react-router-dom';

import './menu-item.styles.scss';

export const Menuitem = ({ title, id, imageUrl, size, linkUrl }) => {
  const navigateTo = useNavigate();
  return (
    <div
      className={`${size} menu-item`}
      key={id}
      onClick={() => navigateTo(linkUrl)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="content" onClick={() => navigateTo(linkUrl)}>
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
