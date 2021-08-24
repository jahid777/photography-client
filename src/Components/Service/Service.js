import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { ServiceContext } from "../../App";
import icon1 from "../../Image/1.png";
import icon2 from "../../Image/2.jpg";
import icon3 from "../../Image/3.jpg";
import ServiceData from "../ServiceData/ServiceData";
import "./Service.css";
import loading from "../../Image/loading.webp";

export const allService = [
  {
    id: 1,
    img: icon1,
    title: "Editorial Photography",
    description:
      "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quod quaerat dolores deserunt quis at! Eum suscipit totam atque voluptatum cumque eveniet libero praesentium est! Alias, soluta minima? Blanditiis, quas.",
    price: "$180",
  },
  {
    id: 2,
    img: icon2,
    title: "Product Photography",
    description:
      "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quod quaerat dolores deserunt quis at! Eum suscipit totam atque voluptatum cumque eveniet libero praesentium est! Alias, soluta minima? Blanditiis, quas.",
    price: "$100",
  },
  {
    id: 3,
    img: icon3,
    title: "Clothing Photography",
    description:
      "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
    details:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quod quaerat dolores deserunt quis at! Eum suscipit totam atque voluptatum cumque eveniet libero praesentium est! Alias, soluta minima? Blanditiis, quas.",
    price: "$150",
  },
];
// Product Photography Clothing Photography Fashion Model Photography
// Editorial Photography Retouching Motion Product Video & GIF
const Service = () => {
  const [services, setServices] = useContext(ServiceContext);
  //akhne data asar sahte reload daoer projon o hoitase na abr dependency o add kora lagtesena..tar bodole map ar jaygay ? ayta disi..akhne abr dependency add korle bar bar api ta rerander ba call hoto
  useEffect(() => {
    fetch("https://sleepy-retreat-41418.herokuapp.com/getService")
      .then((res) => res.json())
      .then((result) => {
        setServices(result);
        console.log(services, "there service");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2 className="text-center mt-5 mb-3">Our Service</h2>

      <div className="row row-cols-1 row-cols-md-3 container-fluid">
        {services.length === 0 && (
          <img
            style={{ height: "350px", margin: "auto" }}
            src={loading}
            alt=""
          />
        )}

        {services?.map((serviceData) => (
          <ServiceData key={serviceData._id} singleServiceData={serviceData}>
            {" "}
          </ServiceData>
        ))}
      </div>
    </div>
  );
};

export default Service;
