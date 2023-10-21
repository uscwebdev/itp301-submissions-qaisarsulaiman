import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

import './index.css';

import Items from './Items.js';

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
      <Items />
    </div>
  </React.StrictMode>
);
