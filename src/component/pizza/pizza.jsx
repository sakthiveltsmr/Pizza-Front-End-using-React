import React, { useState } from "react";

export default function Pizza({ pizza }) {
  const [varient, setvarient] = useState(1);
  const [quantity, setquantity] = useState("small");
  return (
    <div>
      <h1>{pizza.name}</h1>
      <img
        src={pizza.image}
        alt="img"
        className="img-fluid"
        style={{ height: "200px", width: "200px" }}
      />
      <div className="flex-container">
        <div className="w-100">
          <p>Varients</p>
          <select value={varient} onChange={(e) => setvarient(e.target.value)}>
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100">
          <p>Quatity</p>
          <select
            value={quantity}
            onChange={(e) => setquantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h1>Price:{pizza.prices[0][varient] * [quantity]}</h1>
        </div>
        <div className="m-1 w-100">
          <button className="btn btn-danger">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
