import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="fixed-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">
          <h4>PHOTOGRAPHY</h4>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link mx-3" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link mx-3" to="/serviceList">
                Order List
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link mx-3" to="addService">
                Add Service
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink className="nav-link mx-3" to="login">
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
