import React from "react";
import { useParams } from "react-router-dom";
import { allService } from "../Service/Service";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const serviceCard = allService.find((sd) => sd.id == serviceId);
  return (
    <main className="container" style={{ marginTop: "10%" }}>
      <div className="card mb-3" style={{ height: "350px" }}>
        <div className="row no-gutters">
          <div className="col-md-6">
            <img
              style={{ height: "350px", width: "100%" }}
              src={serviceCard.img}
              alt="..."
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Title: {serviceCard.title}</h5>
              <p className="card-text">Details: {serviceCard.details}</p>
              <p className="card-text">
                <strong className="text-muted">
                  Price: {serviceCard.price}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceDetails;
