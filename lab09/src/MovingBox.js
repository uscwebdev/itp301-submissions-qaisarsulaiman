import React from 'react';
import { useState } from 'react';

export default function MovingBox() {
  const [leftValue, setLeftValue] = useState(0);

  function handleKeyDown(event) {
    console.log('Down');
    console.log(event);
    console.log(event.code);

    if (event.code == 'ArrowLeft') {
      setLeftValue(leftValue - 10);
    } else if (event.code == 'ArrowRight') {
      setLeftValue(leftValue + 10);
    }
  }

  function handleKeyPress() {
    console.log('Press');
  }

  function handleKeyUp() {
    console.log('Up');
  }

  return (
    <div className="container">
      <div className="row">
        <h2 className="col-12 mt-5 mb-4">Move the Box</h2>

        <div
          id="box"
          tabIndex="0"
          onKeyDown={handleKeyDown} // Works for every key
          // onKeyPress={handleKeyPress} // Works only for TYPING keys (not CTRL, OPT, UP ARROW, etc.)
          // onKeyUp={handleKeyUp} // Works for every key
          style={{
            position: 'relative',
            left: leftValue + 'px',
          }}
        >
          Move Me
        </div>
      </div>
    </div>
  );
}
