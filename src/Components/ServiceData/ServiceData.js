import React from "react";
import { Link } from "react-router-dom";
import "./ServiceData.css";

const ServiceData = ({ singleServiceData }) => {
  //   const [id, description] = singleServiceData;
  const { _id, description, title } = singleServiceData;

  return (
    <div className="card">
      {/* <img
        style={{ height: "200px" }}
        src={img}
        className="card-img-top"
        alt="..."
      /> */}

      {singleServiceData?.addImage ? (
        <img
          src={`data:image/png;base64,${singleServiceData?.addImage.img}`}
          style={{ height: "200px" }}
          alt=""
          class="card-img-top"
        />
      ) : (
        <img
          src={`http://localhost:5000/getService/${singleServiceData?.addImage?.img}`}
          alt="..."
          style={{ height: "200px" }}
          class="card-img-top"
        />
      )}

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer">
        <div className="card-button">
          <Link to={"/service/" + _id} className="see_more">
            {/* <button className="btn btn-primary see_more">See more...</button> */}
            See More..
          </Link>
          <Link to={"/order/" + _id} className="buy_now">
            {/* <button className="btn btn-primary buy_now">Buy now</button> */}
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceData;
