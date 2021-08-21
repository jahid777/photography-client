import React from "react";
import icon1 from "../../Image/1.png";
import icon2 from "../../Image/2.jpg";
import icon3 from "../../Image/3.jpg";
import ServiceData from "../ServiceData/ServiceData";
import "./Service.css";

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
  return (
    <div>
      <h2 className="text-center mt-5 mb-3">Our Service</h2>

      <div className="row card-deck">
        {allService.map((serviceData) => (
          <ServiceData key={serviceData.id} singleServiceData={serviceData}>
            {" "}
          </ServiceData>
        ))}
      </div>
    </div>
  );
};

export default Service;
