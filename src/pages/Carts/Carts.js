import React from "react";
import { useDispatch, useSelector } from "react-redux";
export default function Carts() {
  const cartstate = useSelector((state) => state.cartReducer);
  return (
    <div>
      <div class="row justify-content-center">
        <div className="col-md-6"></div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}
