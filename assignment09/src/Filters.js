import React from 'react';

export default function Filters() {
  return (
    <div className="container-fluid bg-dark py-3">
      <div className="container bg-dark">
        <div className="row">
          <div className="col-12">
            <h2 class="text-light" id="shop-now">
              Filters
            </h2>
            <button
              class="btn btn-dark btn-outline-light rounded-pill mx-1 mb-2"
              style={{ marginRight: '5px' }}
            >
              Men's
            </button>
            <button class="btn btn-dark btn-outline-light rounded-pill mx-1 mb-2">
              Women's
            </button>
            <button class="btn btn-dark btn-outline-light rounded-pill mx-1 mb-2">
              Shorts
            </button>
            <button class="btn btn-dark btn-outline-light rounded-pill mx-1 mb-2">
              Joggers
            </button>
            <button class="btn btn-dark btn-outline-light rounded-pill mx-1 mb-2">
              Tops
            </button>
            <button class="btn btn-dark btn-outline-light rounded-pill mx-1 mb-2">
              Jackets
            </button>
            <button class="btn btn-dark btn-outline-light rounded-pill mx-1 mb-2">
              Leggings
            </button>
            <button class="btn btn-dark btn-outline-light rounded-pill mx-1 mb-2">
              Hoodies
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
