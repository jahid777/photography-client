import React from "react";
import { Link } from "react-router-dom";
import orderPic from "../../../Image/person.png";
import orderListPic from "../../../Image/message-square.png";
import reviewPic from "../../../Image/person.png";
import serviceListPic from "../../../Image/person.png";
import addServicePic from "../../../Image/plus 1.png";
import makeAdminPic from "../../../Image/person.png";

const Sidebar = () => {
  return (
    <div className="mt-2 ml-5">
      {/* <img style={{ width: "150px" }} src={} alt="" /> */}
      <h5>PHOTOGRAPHY</h5>
      <ul className="mt-4 list-unstyled ml-4">
        <h5>
          <li>
            <img src={orderPic} className="mr-1" alt="" />
            <Link to="/order">Order</Link>
          </li>
        </h5>
        {/* <h5>
          <li className="mt-4">
            <img
              style={{ height: "20px" }}
              src={orderListPic}
              className="mr-1"
              alt=""
            />
            <Link to="/orderList">Order List</Link>
          </li>
        </h5> */}
        {/* <h5>
          <li className="mt-4">
            <img src={reviewPic} className="mr-1" alt="" />
            <Link to="/review">Review</Link>
          </li>
        </h5> */}

        <div>
          <h5>
            <li className="mt-4">
              <img src={serviceListPic} className="mr-1" alt="" />
              <Link to="/serviceList">Order List</Link>
            </li>
          </h5>
          <h5>
            <li className="mt-4">
              <img
                src={addServicePic}
                style={{ height: "20px" }}
                className="mr-1"
                alt=""
              />
              <Link to="/addService">Add Service</Link>
            </li>
          </h5>
          {/* <h5>
            <li className="mt-4">
              <img src={makeAdminPic} className="mr-1" alt="" />
              <Link to="/makeAdmin">Make Admin</Link>
            </li>
          </h5> */}
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
