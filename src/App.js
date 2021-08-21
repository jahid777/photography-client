import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import AddService from "./Components/Pages/AddService/AddService";
import Order from "./Components/Pages/Order/Order";
import ServiceDetails from "./Components/ServiceDetails/ServiceDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/service/:serviceId">
          <ServiceDetails />
        </Route>

        <Route path="/order">
          <Order />
        </Route>

        <Route path="/addService">
          <AddService />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
