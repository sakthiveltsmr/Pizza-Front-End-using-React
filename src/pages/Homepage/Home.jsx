import React from "react";
import Pizzas from "../../pizzadata";
import Pizza from "../../component/pizza/pizza";

function Home() {
  return (
    <div>
      <div className="row">
        {Pizzas.map((p) => {
          return (
            <div className="col-md-4">
              <div>
                <Pizza pizza={p} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
