import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { ServiceContext } from "../../../App";
import Sidebar from "../Sidebar/Sidebar";
import "./Order.css";

const Order = () => {
  const history = useHistory();
  const [services, setServices] = useContext(ServiceContext);
  const [orderInfo, setOrderInfo] = useState([]);
  const { orderId } = useParams();
  const serviceCard = services.find((sd) => sd._id == orderId);

  const handleChange = (e) => {
    const userInfo = { ...orderInfo };
    //for undefined
    if (userInfo.Service === undefined) {
      userInfo["Service"] = serviceCard.title;
    }
    userInfo[e.target.name] = e.target.value;
    setOrderInfo(userInfo);
  };
  const handleSubmit = () => {
    fetch("http://localhost:5000/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
        }
      });

    alert("Order Send Successfully");
    history.push("/");
    //event.preventDefault();
  };

  return (
    <main className="container-fluid">
      <div className="rightOption row">
        <div className="col-md-3 container-fluid mt-5">
          <Sidebar></Sidebar>
        </div>
        <form
          onSubmit={handleSubmit}
          className="order-form col-md-9 mt-5"
          style={{ backgroundColor: "#F4F7FC" }}
        >
          <div className="form-group">
            <input
              type="text"
              name="Name"
              placeholder="Your name / Company's name"
              id=""
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Your email address"
              id=""
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="Service"
              // placeholder={serviceCard?.title}
              defaultValue={serviceCard?.title}
              id=""
              onChange={handleChange}
              required
            />

            <textarea
              type="text-area"
              name="Description"
              placeholder="Enter Description and phone number"
              id=""
              onChange={handleChange}
              required
              rows="4"
              cols="28"
              className="order-text-area"
            />
          </div>

          <div className="" style={{ width: " 140px", marginTop: "-20px" }}>
            <input
              className="submit-button "
              type="submit"
              value="Send"
              style={{
                background: "#111430",
                padding: " 0 60px 0 60px",
                width: "170px",
                color: "white",
              }}
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Order;
