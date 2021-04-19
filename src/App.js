import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route,
} from "react-router-dom";

import './App.css';
import AddServices from "./components/Admin/AddServices/AddServices";
import Admin from "./components/Admin/Admin/Admin";
import Checkout from "./components/Admin/Checkout/Checkout";
import Order from "./components/Admin/Order/Order";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import OrderList from "./components/Admin/OrderList/OrderList";
import Review from "./components/Admin/Review/Review";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";
import ManageService from "./components/Admin/ManageService/ManageService";
import NotFound from "./components/NotFound/NotFound";




export const UserContext = createContext()

function App() {
  const [loggedInUser,serLoggedInUser] = useState({})
  console.log(loggedInUser)
  return (
    <UserContext.Provider value={[loggedInUser,serLoggedInUser]}>
        <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
            <Home></Home>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addService">
            <AddServices></AddServices>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/manageService">
            <ManageService></ManageService>
          </Route>
          <Route path="/checkout/:id">
            <Checkout></Checkout>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
