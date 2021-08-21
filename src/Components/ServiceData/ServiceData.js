import React from "react";
import { Link } from "react-router-dom";
import "./ServiceData.css";

const ServiceData = ({ singleServiceData }) => {
  //   const [id, description] = singleServiceData;
  const { id, description, img, title } = singleServiceData;
  //   console.log(id);
  return (
    <div className="card">
      <img
        style={{ height: "200px" }}
        src={img}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <div className="card-button">
          <Link to={"/service/" + id} className="see_more">
            {/* <button className="btn btn-primary see_more">See more...</button> */}
            See More..
          </Link>
          <Link to="/order" className="buy_now">
            {/* <button className="btn btn-primary buy_now">Buy now</button> */}
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceData;
