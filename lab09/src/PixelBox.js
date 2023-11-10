import React from 'react';
import { useState } from 'react';

export default function PixelBox() {
  const [clientX, setClientX] = useState(0);

  function handleMouseMove(event) {
    // console.log('Mouse moved.');
    console.log(event);
    console.log(event.clientX);
    console.log(event.clientY);
    setClientX(event.clientX);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <h2 className="col-12 mt-5 mb-4">Move your Mouse</h2>

          <p className="col-12">
            Pixels Across: <span id="pixel-msg">{clientX}</span>
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div
            id="pixel-box"
            className="col-12 border border-dark"
            onMouseMove={handleMouseMove}
            style={{
              backgroundColor: 'hsl(' + clientX + ', 80%, 50%)',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
