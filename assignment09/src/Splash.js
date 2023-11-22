import React from 'react';

export default function Splash() {
  return (
    <div>
      <div className="container=fluid bg-light">
        <div className="container">
          <div className="row">
            <p className="my-1 text-center small bg-white">
              <b>FREE SHIPPING</b> UNTIL CHRISTMAS
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-dark py-3">
        <div className="container bg-dark">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="gradient-text">MASSIVE BLACK FRIDAY DEALS</h1>
              <button
                className="btn center btn-dark btn-outline-light rounded-pill"
                onclick="location.href='#shop-now'"
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <img
          className="img-fluid"
          src="https://images.ctfassets.net/wl6q2in9o7k3/6XXAud6Z4ry6smvyDqADxP/0dd198777bf22f05e581f16dbce4a605/BF_Web_Banners_Desktop_Dual_V6.jpg?w=2048&q=100&fm=webp"
          alt="Gymshark splash"
        />
      </div>
    </div>
  );
}
