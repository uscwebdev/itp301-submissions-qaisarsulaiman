import React from 'react';
import ItemCount from './ItemCount.js';
import { useState } from 'react';

export default function Items() {
  const [subtotal, setSubtotal] = useState(0);

  function handleSubtotalSubtract(price) {
    setSubtotal(subtotal - price);
  }

  function handleSubtotalAdd(price) {
    setSubtotal(subtotal + price);
  }

  return (
    <div className="row">
      <Item
        name="Surge Jogger Shorter"
        price={118}
        parentHandlerSubtract={handleSubtotalSubtract}
        parentHandlerAdd={handleSubtotalAdd}
        img_src="https://images.lululemon.com/is/image/lululemon/LM5957S_047780_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      />
      <Item
        name="License to Train Short-Sleeve"
        price={78}
        parentHandlerSubtract={handleSubtotalSubtract}
        parentHandlerAdd={handleSubtotalAdd}
        img_src="https://images.lululemon.com/is/image/lululemon/LM3EJUS_055841_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      />
      <Item
        name="Engineered Warmth Long-Sleeve Crew"
        price={148}
        parentHandlerSubtract={handleSubtotalSubtract}
        parentHandlerAdd={handleSubtotalAdd}
        img_src="https://images.lululemon.com/is/image/lululemon/LM3CLLS_049910_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      />
      <Item
        name='ABC Classic-Fit 5 Pocket Pant 32" Utilitech'
        price={128}
        parentHandlerSubtract={handleSubtotalSubtract}
        parentHandlerAdd={handleSubtotalAdd}
        img_src="https://images.lululemon.com/is/image/lululemon/LM5AQIS_062214_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
      />
      <div className="row mt-2">
        <h3>Subtotal: ${subtotal}</h3>
      </div>
    </div>
  );
}

function Item(prop) {
  const [count, setCount] = useState(0);

  function handleSubtract() {
    if (count > 0) {
      setCount(count - 1);
      prop.parentHandlerSubtract(prop.price);
    }
  }

  function handleAdd() {
    setCount(count + 1);
    prop.parentHandlerAdd(prop.price);
  }

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
          <span className="fs-4 text-dark">${prop.price}</span> USD
        </p>
        <p className="mt-1">{prop.name}</p>
        <div class="btn-group mb-3 border" role="group">
          <button
            type="button"
            class="btn btn-secondary"
            onClick={handleSubtract}
          >
            –
          </button>
          <p className="my-2 mx-3">{count}</p>
          <button type="button" class="btn btn-secondary" onClick={handleAdd}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}
