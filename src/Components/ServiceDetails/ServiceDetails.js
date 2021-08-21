import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ServiceContext } from "../../App";
import { allService } from "../Service/Service";

const ServiceDetails = () => {
  const [services, setServices] = useContext(ServiceContext);
  const { serviceId } = useParams();
  const serviceCard = services.find((sd) => sd._id == serviceId);
  return (
    <main className="container" style={{ marginTop: "10%" }}>
      <div className="card mb-3" style={{ height: "350px" }}>
        <div className="row no-gutters">
          <div className="col-md-6">
            {/* <img
              style={{ height: "350px", width: "100%" }}
              src={serviceCard.img}
              alt="..."
            /> */}
            {serviceCard?.addImage ? (
              <img
                src={`data:image/png;base64,${serviceCard?.addImage.img}`}
                style={{ height: "350px", width: "100%" }}
                alt=""
                // class="card-img-top"
              />
            ) : (
              <img
                src={`http://localhost:5000/getService/${serviceCard?.addImage?.img}`}
                alt="..."
                style={{ height: "350px", width: "100%" }}
                // class="card-img-top"
              />
            )}
          </div>
          <div className="col-md-6">
            <div className="card-body">
              <h5 className="card-title">Title: {serviceCard?.title}</h5>
              <p className="card-text">Details: {serviceCard?.description}</p>
              <p className="card-text">
                <strong className="text-muted">
                  Price: ${serviceCard?.price}
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
