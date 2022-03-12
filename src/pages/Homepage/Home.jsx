import React from "react";
import pizza from "../../pizzadata";

function Home() {
  return (
    <div>
      <h2>{pizza.length}</h2>
    </div>
  );
}

export default Home;
