import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../../action/orderActions";
import Error from "../Error/Error";
import Loading from "../loading/Loading";
import Success from "../Success/Success";
export default function Checkout({ subtotal }) {
  const orderstate = useSelector((state) => state.placeOrderReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const { loading, error, success } = orderstate;
  const dispatch = useDispatch();
  function tokenHander(token) {
    console.log(token);
    dispatch(placeOrder(token, subtotal));
  }

  return (
    <div>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
      {success && <Success success="Your Order Placed Successfully" />}

      {currentUser ? (
        <StripeCheckout
          amount={subtotal * 100}
          shippingAddress
          token={tokenHander}
          stripeKey=""
          currency="INR"
        >
          <button className="btn btn-danger">Pay Now</button>
        </StripeCheckout>
      ) : (
        <button className="btn btn-primary">Login To Pay</button>
      )}
    </div>
  );
}
