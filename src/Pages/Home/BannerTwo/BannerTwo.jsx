import React from "react";
import banner2 from "../../../assets/home/chef-service.jpg";

const BannerTwo = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        width: "100%",
        display: "flex", // Flexbox for centering the content
        justifyContent: "center", // Horizontally center
        alignItems: "center", // Vertically center
        position: "relative", // To allow positioning of the text container
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          textAlign: "center",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "800px",
          height: "200px",
          display: "flex", // Add flex to center content inside
          flexDirection: "column", // Ensure vertical flow of the text
          justifyContent: "center", // Center content vertically
          alignItems: "center", // Center content horizontally
          padding: "80px", // Add padding for spacing inside the box
        }}
      >
        <h3 className="uppercase text-3xl">Bistro Boss</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Necessitatibus, libero accusamus labor. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Necessitatibus, libero accusamus labor.
        </p>
      </div>
    </div>
  );
};

export default BannerTwo;
