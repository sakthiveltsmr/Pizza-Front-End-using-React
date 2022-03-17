import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Carts() {
  const cartstate = useSelector((state) => state.cartReducer);
  const cartItems = cartstate.cartItems;
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 style={{ fontSize: "30px" }}>My Cart</h2>
          {cartItems.map((item) => {
            console.log(item);
            return (
              <div className="flex-container">
                <div>
                  <h1>{item.name}</h1>
                  <h1>
                    Price:{item.quantity}*{item.varient}={item.price}
                  </h1>
                </div>
                <div></div>
                <div></div>
              </div>
            );
          })}
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
