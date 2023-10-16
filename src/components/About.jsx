import React from "react";
import BannerImage from "../assets/banner.jpg";
import "../styles/About.css";

export const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolor
          assumenda quo quod debitis ullam eveniet officia necessitatibus,
          tempora sapiente non veritatis maxime illum neque? Veritatis est sit
          similique sunt. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quae impedit eaque non possimus ducimus consequuntur quibusdam.
          Sapiente commodi sequi distinctio. Ipsum delectus atque est, accusamus
          ipsam molestias magnam labore debitis.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta dolor
          assumenda quo quod debitis ullam eveniet officia necessitatibus,
          tempora sapiente non veritatis maxime illum neque? Veritatis est sit
          similique sunt. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Quae impedit eaque non possimus ducimus consequuntur quibusdam.
          Sapiente commodi sequi distinctio. Ipsum delectus atque est, accusamus
          ipsam molestias magnam labore debitis.
        </p>
      </div>
    </div>
  );
};
