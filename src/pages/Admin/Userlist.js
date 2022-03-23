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
}
