import React from 'react';
import { useState } from 'react';

export default function Items(prop) {
  const [subtotal, setSubtotal] = useState(0);

  function handleSubtotalSubtract(price) {
    price = parseFloat(price);
    setSubtotal(subtotal - price);
  }

  function handleSubtotalAdd(price) {
    price = parseFloat(price);
    setSubtotal(subtotal + price);
  }

  return (
    <div>
      <div className="container pt-4 mb-3">
        <div className="row items">
          <Item
            name="CROSSOVER LONG SLEEVE CROP TOP"
            price="15.20"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/products/IconTrendCropTopBlackB4A8F-BBBB.81_b2bdc9e7-ff76-4926-a055-5601a8f19d04_2048x.jpg?v=1679325841"
          />
          <Item
            name="ESSENTIAL OVERSIZED T-SHIRT"
            price="15.60"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/products/OversizedT-ShirtWhiteA1A3E.A-Edit_BK_e0bd1dc3-17c1-4301-a69f-278b601b6841_2048x.jpg?v=1647041693"
          />
          <Item
            name="LONGLINE SPORTS BRA"
            price="15.20"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/files/LonglineSportsBraBlack-B4A9L-BBBB191_2048x.jpg?v=1697798493"
          />
          <Item
            name="LEGACY STRINGER"
            price="11.20"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/products/LegacyStringerWhiteA1A8QA1A8Q-WBBM.A_63fb6945-474a-4a5a-984f-fd7e737e8651_2048x.jpg?v=1663674322"
          />
          <Item
            name="PULSE PULLOVER"
            price="24.00"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/files/PulseSweatshirtBlackB7A8R-BBBB-1028_2048x.jpg?v=1689257050"
          />
          <Item
            name="ESSENTIAL OVERSIZED JOGGERS"
            price="35.20"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/files/EssentialOversizedJogger-GSLinenBrown-A2A7T-NBZL-1235.jpg?v=1689579318"
          />
          <Item
            name="TRAINING OVERSIZED FLEECE SWEATSHIRT"
            price="36.80"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/files/TrainingOversizedFleeceSweatshirt-GSBlack-B5A9R-BB2J-1211.jpg?v=1694078877"
          />
          <Item
            name="ARRIVAL REGULAR FIT T-SHIRT"
            price="15.40"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/products/ArrivalRegularSSTop-WhiteA1A2Z-WBBM.AllImages1_ZH_ZH_2048x.jpg?v=1644430198"
          />
          <Item
            name="POCKET LEGGINGS"
            price="20.00"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/files/Training_PocketLeggingsChocolateBrown-B4A8O-NBRL-1069.146_cc897c46-0605-4fc2-bfd4-cba76a3396b4_2048x.jpg?v=1689670214"
          />
          <Item
            name="ARRIVAL SHORTS"
            price="23.40"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/products/ARRIVALSHORTSBLACKA2A1L-BBBBANDA2A1L-BBBB.A.jpg?v=1687311395"
          />
          <Item
            name="CREST HOODIE"
            price="28.00"
            parentHandlerSubtract={handleSubtotalSubtract}
            parentHandlerAdd={handleSubtotalAdd}
            img_src="https://cdn.shopify.com/s/files/1/0156/6146/products/CrestHoodieM_Slim_CoreOliveA2A4G-EBF1.A_ZH_ZH_2048x.jpg?v=1644430221"
          />
          <Item
            name="MINIMAL SPORTS BRA"
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
    </div>
  );
}

function Item(prop) {
  const [count, setCount] = useState(0);

  function handleSubtract() {
    if (count > 0) {
      setCount(count - 1);
      prop.parentHandlerSubtract(prop.price);
    }
  }

  function handleAdd() {
    setCount(count + 1);
    prop.parentHandlerAdd(prop.price);
  }

  return (
    <div className="col-6 col-md-4 col-lg-3 p-1">
      <div className="col border rounded px-3 pt-3">
        <div className="thumbnail">
          <img
            className="img-fluid rounded mb-2"
            src={prop.img_src}
            alt={prop.name}
          />
        </div>
        <p className="float-end ms-4 text-secondary small">
          <span className="fs-4 text-dark">${prop.price}</span> USD
        </p>
        <p className="mt-1">{prop.name}</p>
        <div className="btn-group mb-3 border" role="group">
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
      </div>
    </div>
  );
}
