import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import Buttons from './Buttons.js';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <Header />
    <Buttons />
  </React.StrictMode>
);
