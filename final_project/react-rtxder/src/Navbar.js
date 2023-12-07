import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchForm({ onCartButtonClick }) {
  return (
    <nav class="navbar navbar-expand-sm bg-light sticky-top navbar-light">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gymshark_logo.svg/2560px-Gymshark_logo.svg.png"
            width="auto"
            height="30"
            alt="Gymshark"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {/* <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Men's
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Women's
              </a>
            </li>
          </ul> */}
        </div>
        {/* <button type="button" class="btn btn-outline-primary mx-2 float-right">
          Wishlist
        </button> */}
        <button
          type="button"
          class="btn btn-primary float-right"
          onClick={onCartButtonClick}
        >
          Shopping Cart
        </button>
      </div>
    </nav>
  );
}
