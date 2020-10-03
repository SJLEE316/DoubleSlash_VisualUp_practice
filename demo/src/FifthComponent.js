import React, {Component} from "react";
import "./FifthComponent.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class FifthComponent extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "10px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div class="components fifth-component">
        <h1>Center Mode</h1>
        <div class="slider">
          <Slider {...settings}>
            <div class="card-container">
              <h3>1</h3>
            </div>
            <div class="card-container">
              <h3>2</h3>
            </div>
            <div class="card-container">
              <h3>3</h3>
            </div>
            <div class="card-container">
              <h3>4</h3>
            </div>
            <div class="card-container">
              <h3>5</h3>
            </div>
            <div class="card-container">
              <h3>6</h3>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}
