import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Pizzas from "../../pizzadata";
import Pizza from "../../component/pizza/pizza";
import { getAllPizzas } from "../../action/pizzaAction";
import Filter from "../../component/Filter/Filter";

function Home() {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <Filter />
      <div className="row justify-content-center">
        {loading ? (
          <h1>loading....</h1>
        ) : error ? (
          <h1>something went wrong</h1>
        ) : (
          pizzas.map((p) => {
            return (
              <div className="col-md-3 p-3 m-3" key={p._id}>
                <div>
                  <Pizza pizza={p} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Home;
