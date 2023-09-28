import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import Item from './Item.js';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div className="container pt-4">
      <div className="row">
        <img
          id="logo"
          src="https://cdn.worldvectorlogo.com/logos/lululemon-1.svg"
          alt="Lululemon Logo"
        />
      </div>
    </div>
    <div className="container pt-3">
      <h1 className="text-secondary display-6 text-center">Shopping Cart</h1>
    </div>
    <div className="container pt-4 mb-3">
      <div className="row">
        <Item
          name="Surge Jogger Shorter"
          price="$118"
          img_src="https://images.lululemon.com/is/image/lululemon/LM5957S_047780_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
        />
        <Item
          name="License to Train Short-Sleeve Shirt"
          price="$78"
          img_src="https://images.lululemon.com/is/image/lululemon/LM3EJUS_055841_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
        />
        <Item
          name="Engineered Warmth Long-Sleeve Crew"
          price="$148"
          img_src="https://images.lululemon.com/is/image/lululemon/LM3CLLS_049910_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
        />
        <Item
          name='ABC Classic-Fit 5 Pocket Pant 32" Utilitech'
          price="$128"
          img_src="https://images.lululemon.com/is/image/lululemon/LM5AQIS_062214_1?wid=1080&op_usm=0.5,2,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72"
        />
      </div>
    </div>
  </React.StrictMode>
);
