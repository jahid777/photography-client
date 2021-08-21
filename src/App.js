import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import AddService from "./Components/Pages/AddService/AddService";
import Login from "./Components/Pages/Authenticatoin/Login";
import Order from "./Components/Pages/Order/Order";
import ServiceList from "./Components/Pages/ServiceList/ServiceList";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";

export const ServiceContext = createContext();
function App() {
  const [services, setServices] = useState([]);

  return (
    <ServiceContext.Provider value={[services, setServices]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/service/:serviceId">
            <ServiceDetails />
          </Route>

          <Route path="/order/:orderId">
            <Order />
          </Route>

          <Route path="/order">
            <Order />
          </Route>

          <Route path="/addService">
            <AddService />
          </Route>

          <Route path="/serviceList">
            <ServiceList />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </ServiceContext.Provider>
  );
}

export default App;
