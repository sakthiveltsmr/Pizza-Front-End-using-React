import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Homepage/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Carts from "./pages/Carts/Carts";
import Register from "./pages/Register/Register";
import Login from "./pages/login/login";
import Order from "./pages/Order/Order";
import Admin from "./pages/Admin/Admin";
import Userslist from "./pages/Admin/Userlist";
import Orderslist from "./pages/Admin/Orderlist";
import Pizzalist from "./pages/Admin/Pizzalist";
import Addpizza from "./pages/Admin/Addpizza";
import Editpizza from "./pages/Admin/Editpizza";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" element={<Carts />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/admin/userslist" element={<Userslist />} />
          <Route path="/admin/orderslist" element={<Orderslist />} />
          <Route path="/admin/pizzaslist" element={<Pizzalist />} />
          <Route path="/admin/addpizza" element={<Addpizza />} />
          <Route
            path="/admin/editpizza/:pizzaid"
            element={<Editpizza />}
            exact
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
