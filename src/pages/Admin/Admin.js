import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";

import Addpizza from "./Addpizza";
import Editpizza from "./Editpizza";
import Orderslist from "./Orderslist";
import Pizzaslist from "./Pizzaslist";
import Userslist from "./Userslist";

export default function Admin() {
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentUser.isAdmin) {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center p-3">
        <div className="col-md-10">
          <h2 style={{ fontSize: "35px" }}>Admin Panel</h2>

          <ul className="adminfunctions">
            <li>
              <Link to={"/admin/userslist"} style={{ color: "white" }}>
                Users List
              </Link>
            </li>
            <li>
              <Link to={"/admin/pizzaslist"} style={{ color: "white" }}>
                Pizzas List
              </Link>
            </li>
            <li>
              <Link to={"/admin/addpizza"} style={{ color: "white" }}>
                Add Pizza
              </Link>
            </li>
            <li>
              <Link to={"/admin/orderslist"} style={{ color: "white" }}>
                Orders List
              </Link>
            </li>
          </ul>

          <Routes>
            <Route path="/admin" element={<Userslist />} exact />
            <Route path="/admin/userslist" element={<Userslist />} exact />
            <Route path="/admin/orderslist" element={<Orderslist />} exact />
            <Route path="/admin/pizzaslist" element={<Pizzaslist />} exact />
            <Route path="/admin/addpizza" element={<Addpizza />} exact />
            <Route
              path="/admin/editpizza/:pizzaid"
              component={Editpizza}
              exact
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
