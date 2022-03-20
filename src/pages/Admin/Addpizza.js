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
  return <div>Addpizza</div>;
}
