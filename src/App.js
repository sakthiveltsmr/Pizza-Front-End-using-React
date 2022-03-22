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
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/cart" exact element={<Carts />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/orders" exact element={<Order />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
