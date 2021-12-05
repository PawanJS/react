import React from 'react';

import './card.styles.css';

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="Monster"
        src={`https://robohash.org/${props.monster.id}1?set=set4&size=180x180`}
      />
      <h2 key={props.monster.id}>{props.monster.name}</h2>
      <p>{props.monster.email}</p>
    </div>
  );
};
