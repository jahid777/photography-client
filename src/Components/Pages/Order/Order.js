import React from "react";
import uploadIcon from "../../../Image/upload.png";
import Sidebar from "../Sidebar/Sidebar";
import "./Order.css";

const Order = () => {
  const handleSubmit = () => {};
  const handleChange = () => {};

  return (
    <main className="container-fluid">
      <div className="rightOption row">
        <div className="col-md-3 container-fluid">
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
              name="inputName"
              placeholder="Your name / Company's name"
              id=""
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="inputEmail"
              placeholder="Your email address"
              id=""
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="selectedServiceName"
              placeholder="selected Service Name "
              id=""
              onChange={handleChange}
              required
            />

            <textarea
              type="text-area"
              name="inputDescription"
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
