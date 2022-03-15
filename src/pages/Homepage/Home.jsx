import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pizzas from "../../pizzadata";
import Pizza from "../../component/pizza/pizza";
import { getAllPizzas } from "../../action/pizzaAction";

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <div className="row">
        {Pizzas.map((p) => {
          return (
            <div className="col-md-4 p-3">
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
