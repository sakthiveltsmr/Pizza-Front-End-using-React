import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../../action/pizzaAction";
import Error from "../../component/Error/Error";
import Loading from "../../component/loading/Loading";
import Success from "../../component/Success/Success";

export default function Addpizza() {
  const [name, setname] = useState("");
  const [smallprice, setsmallprice] = useState();
  const [mediumprice, setmediumprice] = useState();
  const [largeprice, setlargeprice] = useState();
  const [image, setimage] = useState("");
  const [descripton, setdescription] = useState("");
  const [category, setcategory] = useState("");

  const dispatch = useDispatch();

  const addpizzastate = useSelector((state) => state.addPizzaReducer);
  const { success, error, loading } = addpizzastate;

  const Formhandler = (e) => {
    e.preventDefault();
    const pizza = {
      name,
      image,
      descripton,
      category,
      prices: {
        small: smallprice,
        medium: mediumprice,
        large: largeprice,
      },
    };
    console.log(pizza);
    dispatch(addPizza(pizza));
  };
  return (
    <div>
      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Addpizza</h1>

        {loading && <Loading />}
        {error && <Error error="something went wrong" />}
        {success && <Success success="New Piza added Successfully" />}
        <form onSubmit={Formhandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="small varient price"
            value={smallprice}
            onChange={(e) => {
              setsmallprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="medium varient price"
            value={mediumprice}
            onChange={(e) => {
              setmediumprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="large varient price"
            value={largeprice}
            onChange={(e) => {
              setlargeprice(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="description"
            value={descripton}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className="btn btn-success mt-3" type="submit">
            Add Pizza
          </button>
        </form>
      </div>
    </div>
  );
}
