import React from 'react';

export default function Splash() {
  return (
    <div>
      <div className="container-fluid bg-light">
        <div className="row">
          <p className="my-1 text-center small bg-white">
            <b>FREE SHIPPING</b> UNTIL CHRISTMAS
          </p>
        </div>
      </div>
      <div className="container-fluid bg-dark py-3">
        <div className="container bg-dark">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="gradient-text">MASSIVE WINTER HOLIDAY DEALS</h1>
              <p className="text-light my-0">
                Get cozy this holiday season with our new <i>Rest Day</i>{' '}
                collection.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12">
        <img
          className="img-fluid"
          src="https://images.ctfassets.net/wl6q2in9o7k3/2vVypAU3lDAD3cRE7xeA0E/5d94dedaf1c644eccafb357e2181ebda/GY90985_TR01_INTL_Web_Banner_Headless_Desktop_3840x1140_DUAL_2.jpg?w=2048&q=100&fm=webp"
          alt="Gymshark splash"
        />
      </div>
    </div>
  );
}
