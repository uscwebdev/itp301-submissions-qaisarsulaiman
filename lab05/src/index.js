import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const root = createRoot(document.querySelector('#root'));

root.render(
  <React.StrictMode>
    <div id="container">
      <div id="header">
        <h1>Qaisar Sulaiman</h1>
        <a href="mailto:qsulaima@usc.edu">qsulaima@usc.edu</a>
        <br />
        <button id="favorite-color">Favorite Color</button>
        <hr />
      </div>
      <div className="row">
        <div className="col-2">
          <h3>Favorite Website</h3>
          <a href="youtube.com">YouTube</a>
          <h3>Favorite Activity</h3>
          <img
            src="https://blog.nasm.org/hubfs/bench-press-form.jpg"
            alt="Weightlifting"
          />
        </div>
        <div className="col-2">
          <h3>Class Schedule</h3>
          <ol>
            <li>HBIO-301: Human Anatomy</li>
            <li>PHYS-135a: Physics for the Life Sciences</li>
            <li>SOCI-242: Sociology, Demography and Health</li>
            <li>ITP-301: Front-End Web Development</li>
          </ol>
        </div>
        <div className="clear-float"></div>
      </div>
    </div>
  </React.StrictMode>
);
