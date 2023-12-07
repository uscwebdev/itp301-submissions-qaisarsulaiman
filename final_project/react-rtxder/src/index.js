import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navbar from './Navbar.js';
import Items from './Items.js';
import Splash from './Splash.js';
import Filters from './Filters';
import { useState } from 'react';

const root = createRoot(document.querySelector('#root'));

const App = () => {
  const [showCart, setShowCart] = useState(false);
  const [itemsInCart, setItemsInCart] = useState([]);

  const handleCartModal = () => setShowCart(!showCart);

  return (
    <React.StrictMode>
      <Navbar onCartButtonClick={handleCartModal} />
      <Splash />
      <Filters />
      <Items
        isCartVisible={showCart}
        onCartModalToggle={handleCartModal}
        cartItems={itemsInCart}
        setCartItems={setItemsInCart}
      />
      <div className="container-fluid bg-dark">
        <div className="row text-center">
          <p className="gradient-text display-6 mt-4 mb-0">United We Sweat</p>
          <p className="text-light small">
            TM © 2023 - GymShark - All Rights Reserved.
          </p>
        </div>
      </div>
    </React.StrictMode>
  );
};

root.render(<App />);
