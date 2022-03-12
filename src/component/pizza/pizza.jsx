import React from "react";

export default function pizza({ pizza }) {
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
          <select>
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100">
          <p>Price</p>
          <select>
            {pizza.prices.map((price) => {
              //   return <option value={price}>{price}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
