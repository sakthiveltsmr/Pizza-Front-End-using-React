import React from "react";

export default function pizza({ pizza }) {
  return (
    <div>
      <h1>{pizza.name}</h1>
      <img src={pizza.image} alt="img" className="img-fluid" />
    </div>
  );
}
