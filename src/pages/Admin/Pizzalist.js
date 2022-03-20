import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deletePizza, getAllPizzas } from "../../action/pizzaAction";
import Error from "../../component/Error/Error";
import Filter from "../../component/Filter/Filter";
import Loading from "../../component/loading/Loading";
export default function Pizzalist() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, error, Loading } = pizzasstate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);
  return (
    <div>
      <h2>Pizzas list</h2>

      <table className="table table-bordered table-responsive-sm">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name</td>
            <td>
              Small:{Pizza.prices[0]["small"]}
              <br />
              Medium:{Pizza}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
