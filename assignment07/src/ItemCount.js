import React from 'react';
import { useState } from 'react';

export default function ItemCount() {
  const [count, setCount] = useState(0);

  function handleSubtract() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function handleAdd() {
    setCount(count + 1);
  }

  return (
    <div class="btn-group mb-3 border" role="group">
      <button type="button" class="btn btn-secondary" onClick={handleSubtract}>
        –
      </button>
      <p className="my-2 mx-3">{count}</p>
      <button type="button" class="btn btn-secondary" onClick={handleAdd}>
        +
      </button>
    </div>
  );
}
