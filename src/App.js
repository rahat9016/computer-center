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
import BookingList from "./components/Admin/BookingList/BookingList";



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
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/addService">
            <AddServices></AddServices>
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/orderList">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute path="/booking">
            <BookingList></BookingList>
          </PrivateRoute>
          <PrivateRoute path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:id">
            <Checkout></Checkout>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
