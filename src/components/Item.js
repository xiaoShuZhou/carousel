import React from 'react';

const Item = ({ id, image, name, price, originals, newItem }) => (
  <div key={id} className="item">
    <div className="item-image">
      <img src={image} alt={name} />
      <p>€ {price}</p>
      <button className="star-button"></button>
    </div>
    <div className="item-details">
      <h3>{name}</h3>
      {originals && <span className="originals">Originals</span>}
      {newItem && <span className="newItem">New</span>}
    </div>
  </div>
);

export default Item;
