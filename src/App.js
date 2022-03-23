import "./App.css";
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/Homepage/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" exact component={Carts} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/orders" exact component={Order} />
          {/* <Route path="/admin" component={Userslist} exact /> */}
          <Route path="/admin/userslist" component={Userslist} exact />
          <Route path="/admin/orderslist" component={Orderslist} exact />
          <Route path="/admin/pizzaslist" component={Pizzalist} exact />
          <Route path="/admin/addpizza" component={Addpizza} exact />
          <Route path="/admin/editpizza/:pizzaid" component={Editpizza} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
