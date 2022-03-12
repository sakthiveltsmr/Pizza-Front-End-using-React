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
    </div>
  );
}
