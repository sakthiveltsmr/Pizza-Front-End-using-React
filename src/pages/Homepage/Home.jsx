import React from "react";
import pizza from "../../pizzadata";

function Home() {
  return (
    <div>
      <div className="row">
        {pizza.map((pizza) => {
          return (
            <div className="col-md-4">
              <div>
                <pizza />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
