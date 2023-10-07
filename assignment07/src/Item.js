import React from 'react';
import ItemCount from './ItemCount.js';

export default function Item(prop) {
  return (
    <div className="col-sm-6 p-1">
      <div className="col border rounded px-3 pt-3">
        <div className="thumbnail">
          <img
            className="img-fluid rounded mb-2"
            src={prop.img_src}
            alt={prop.name}
          />
        </div>
        <p className="float-end ms-4 text-secondary small">
          <span className="fs-4 text-dark">{prop.price}</span> USD
        </p>
        <p className="mt-1">{prop.name}</p>
        <ItemCount />
      </div>
    </div>
  );
}
