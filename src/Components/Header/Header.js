import React from "react";
import headerImg from "../../Image/headerImg.jpeg";
import Navbar from "../Shared/Navbar/Navbar";
import "./Header.css";
import slider1 from "../../Image/1.png";
import slider2 from "../../Image/2.jpg";
import slider3 from "../../Image/3.jpg";
import slider4 from "../../Image/4.jpg";
import slider5 from "../../Image/5.jpg";
import slider6 from "../../Image/6.jpg";
import slider7 from "../../Image/7.jpg";
import slider8 from "../../Image/8.jpg";
import slider9 from "../../Image/9.jpg";
import slider10 from "../../Image/10.jpg";

const Header = () => {
  return (
    <div>
      <Navbar />
      {/* <div>
        <img className="header_img" src={headerImg} alt="" />
      </div> */}
      <main className="mt-5">
        <div
          id="carouselExampleCaptions"
          class="carousel slide carousel-fade"
          data-ride="carousel"
          data-interval="500"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="8"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="9"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item  slider-height active">
              <img
                src={slider1}
                class="d-block w-100 slider-img-height"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item  slider-height">
              <img
                src={slider2}
                class="d-block w-100 slider-img-height"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item  slider-height">
              <img
                src={slider3}
                class="d-block w-100 slider-img-height"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
            <div class="carousel-item  slider-height">
              <img
                src={slider4}
                class="d-block w-100 slider-img-height"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>

            <div class="carousel-item  slider-height">
              <img
                src={slider5}
                class="d-block w-100 slider-img-height"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>

            <div class="carousel-item  slider-height">
              <img
                src={slider6}
                class="d-block w-100 slider-img-height"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>

            <div class="carousel-item  slider-height">
              <img
                src={slider7}
                class="d-block w-100 slider-img-height"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>

            <div class="carousel-item  slider-height">
              <img
                src={slider8}
                class="d-block w-100 slider-img-height"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>

            <div class="carousel-item  slider-height">
              <img
                src={slider9}
                class="d-block w-100 slider-img-height"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>

            <div class="carousel-item  slider-height">
              <img
                src={slider10}
                class="d-block w-100 slider-img-height"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
