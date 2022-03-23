import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../action/orderActions";
import Error from "../../component/Error/Error";
import Filter from "../../component/Filter/Filter";
import Loading from "../../component/loading/Loading";
import { deleteUser, getAllUsers } from "../../action/userActions";

export default function Userslist() {
  const dispatch = useDispatch();
  const usersstate = useSelector((state) => state.getAllUsersReducer);
  const { error, loading, users } = usersstate;

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div>
      <h1>Users list</h1>
      {loading && <Loading />}
      {error && <Error error="Something went wrong" />}
    </div>
  );
}
