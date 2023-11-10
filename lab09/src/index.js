import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import PixelBox from './PixelBox.js';
import MovingBox from './MovingBox.js';
import Form from './Form.js';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div className="container pt-4">
      <div className="row">
        <h1 className="col-12">Lecture 9: User Input Validation</h1>
      </div>
    </div>

    <PixelBox />
    <MovingBox />
    <Form />
  </React.StrictMode>
);
