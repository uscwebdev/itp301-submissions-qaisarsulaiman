import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Items({
  isCartVisible,
  onCartModalToggle,
  cartItems,
  setCartItems,
}) {
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    // Retrieve cart items from Local Storage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));

    if (storedCartItems) {
      setCartItems(storedCartItems);
    }
  }, []); // Empty dependency array ensures it runs only on mount

  useEffect(() => {
    // Update Local Storage whenever cartItems changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  // const [showCart, setShowCart] = useState(false);
  // const [cartItems, setCartItems] = useState([]);

  function handleSubtotalSubtract(price, itemName) {
    price = parseFloat(price);
    setSubtotal(subtotal - price);

    // Remove the item from the cart
    setCartItems(cartItems.filter((item) => item.name !== itemName));
  }

  function handleSubtotalAdd(price, itemName) {
    price = parseFloat(price);
    setSubtotal(subtotal + price);

    // Add the item to the cart
    setCartItems([...cartItems, { name: itemName, price: price }]);
  }

  const handleCartModal = () => onCartModalToggle(!isCartVisible);

  return (
    <div>
      <div className="container pt-4 mb-3">
        <div className="row items">
          <Item
            name="Crossover Long Sleeve Crop Top"
            price="15.20"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/files/IconTrendCropTopBlackB4A8F-BBBB.81_60cfec79-6ac4-4777-adb3-a71627fb8acf_2048x.jpg?v=1701441753"
          />
          <Item
            name="Training Oversized Fleece Sweatshirt"
            price="36.80"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/files/TrainingOversizedFleeceSweatshirt-GSBlack-B5A9R-BB2J-1211.jpg?v=1694078877"
          />
          <Item
            name="Essential Oversized T-Shirt"
            price="15.60"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/products/OversizedT-ShirtWhiteA1A3E.A-Edit_BK_e0bd1dc3-17c1-4301-a69f-278b601b6841_2048x.jpg?v=1647041693"
          />
          <Item
            name="Longline Sports Bra"
            price="15.20"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/files/LonglineSportsBraBlack-B4A9L-BBBB191_2048x.jpg?v=1697798493"
          />
          <Item
            name="Legacy Stringer"
            price="11.20"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/products/LegacyStringerWhiteA1A8QA1A8Q-WBBM.A_63fb6945-474a-4a5a-984f-fd7e737e8651_2048x.jpg?v=1663674322"
          />
          <Item
            name="Pulse Pullover"
            price="24.00"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/files/PulseSweatshirt-Navy-B7A8R-UBCY-1135_5ec2f2ce-0e1d-4a85-aab4-ca9e359ee87c_2048x.jpg?v=1701441727"
          />
          <Item
            name="Essential Oversized Joggers"
            price="35.20"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/files/EssentialOversizedJogger-GSLinenBrown-A2A7T-NBZL-1235.jpg?v=1689579318"
          />
          <Item
            name="Arrival Regular Fit T-Shirt"
            price="15.40"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalRegularSSTop-WhiteA1A2Z-WBBM.AllImages1_ZH_ZH_2048x.jpg?v=1644430198"
          />
          <Item
            name="Pocket Leggings"
            price="20.00"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/files/Training_PocketLeggingsChocolateBrown-B4A8O-NBRL-1069.146_cc897c46-0605-4fc2-bfd4-cba76a3396b4_2048x.jpg?v=1689670214"
          />
          <Item
            name="Arrival Shorts"
            price="23.40"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/products/ARRIVALSHORTSBLACKA2A1L-BBBBANDA2A1L-BBBB.A.jpg?v=1687311395"
          />
          <Item
            name="Crest Hoodie"
            price="28.00"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/products/CrestHoodieM_Slim_CoreOliveA2A4G-EBF1.A_ZH_ZH_2048x.jpg?v=1644430221"
          />
          <Item
            name="Minimal Sports Bra"
            price="27.00"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/files/MINIMALSPORTSBRAGSDuskGreenB3A2J-EB66-0111copy.jpg?v=1689185944"
          />
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="container">
          <div className="row py-4">
            <p className="lead my-0">
              <span className="float-end">${subtotal.toFixed(2)}</span>
              Subtotal:
            </p>
            <p className="lead my-0">
              <span className="float-end">$0.00</span>
              Shipping:
            </p>
            <p className="lead mt-0">
              <span className="float-end">${(subtotal * 0.07).toFixed(2)}</span>
              Tax:
            </p>
            <hr />
            <p className="lead mt-0">
              <span className="float-end text-primary">
                ${(subtotal * 1.07).toFixed(2)}
              </span>
              Grand Total:
            </p>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-primary" onClick={handleCartModal}>
        View Cart
      </button> */}

      <Modal show={isCartVisible} onHide={handleCartModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <div className="container-fluid">Your Cart</div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div className="container-fluid">
                <div key={index}>
                  <p style={{ float: 'right' }}>${item.price.toFixed(2)}</p>
                  <p>{item.name}</p>
                  {index !== cartItems.length - 1 && (
                    <hr style={{ opacity: 0.1 }} />
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="container-fluid">
              <p>There are no items in your cart...</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="container-fluid">
            {/* <div className="row"> */}
            <p className="my-0">
              <span className="float-end">${subtotal.toFixed(2)}</span>
              Subtotal:
            </p>
            <p className="my-0">
              <span className="float-end">$0.00</span>
              Shipping:
            </p>
            <p className="mt-0">
              <span className="float-end">${(subtotal * 0.07).toFixed(2)}</span>
              Tax:
            </p>
            <hr />
            <p className="mt-0">
              <span className="float-end text-primary">
                <b>${(subtotal * 1.07).toFixed(2)}</b>
              </span>
              <b>Grand Total:</b>
            </p>
            {/* </div> */}
            <Button variant="secondary" onClick={handleCartModal}>
              Close
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

function Item(prop) {
  const [count, setCount] = useState(0);

  function handleSubtract() {
    if (count > 0) {
      setCount(count - 1);
      prop.parentHandlerSubtract(prop.price, prop.name);
    }
  }

  function handleAdd() {
    setCount(count + 1);
    prop.parentHandlerAdd(prop.price, prop.name);
  }

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-1">
      <div className="col border rounded px-3 pt-3">
        <div className="thumbnail">
          <img
            className="img-fluid rounded mb-2"
            src={prop.img_src}
            alt={prop.name}
          />
        </div>

        <p className="mt-1 text-center two-lines">{prop.name}</p>
        <div className="">
          <div className="btn-group float-start mb-3 border" role="group">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleSubtract}
            >
              –
            </button>
            <p className="my-2 mx-3">{count}</p>
            <button type="button" class="btn btn-secondary" onClick={handleAdd}>
              +
            </button>
          </div>
          <p className="mt-2 float-end text-secondary small">
            $<span className="fs-4 text-dark">{prop.price}</span>
          </p>

          <div className="clear-float"></div>
        </div>
      </div>
    </div>
  );
}
