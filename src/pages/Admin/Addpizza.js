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
  return <div>Addpizza</div>;
}
