// import React from "react";
// // import "../../index.css";
// import { useSelector } from "react-redux";
// function Navbar() {
//   const cartstate = useSelector((state) => state.cartReducer);
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded ">
//         <a className="navbar-brand" href="/">
//           HEY PIZZA
//         </a>
//         {/* <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button> */}
//         <div
//           className="collapse navbar-collapse justify-content-end"
//           id="navbarNav"
//         >
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item ">
//               <a className="nav-link" href="/login">
//                 Login
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/cart">
//                 Cart {cartstate.cartItems.length}
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../action/userActions";
export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const isAdmin = currentUser?.isAdmin;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
        <a className="navbar-brand" href="/">
          Pizz shoot
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <i style={{ color: "black" }} className="fas fa-bars"></i>
          </span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto">
            {currentUser ? (
              <div className="dropdown mt-2">
                <a
                  style={{ color: "black" }}
                  className="dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {currentUser.name}
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  {isAdmin ? (
                    <li className="nav-item">
                      <a className="dropdown-item" href="/admin">
                        Dashboard
                      </a>
                    </li>
                  ) : null}
                  <a className="dropdown-item" href="/orders">
                    Orders
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => {
                      dispatch(logoutUser());
                    }}
                  >
                    <li>Logout</li>
                  </a>
                </div>
              </div>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="/login">
                  Login
                </a>
              </li>
            )}

            <li className="nav-item">
              <a className="nav-link" href="/cart">
                Cart {cartstate.cartItems.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
