import React from "react";
import ReactImage from "../assets/React.png";

const ImageComponent = () => {
  return (
    <div>
      <h2>Это картинка</h2>
      <img
        src={ReactImage}
        alt="React"
        style={{ width: "320px", height: "250px" }}
      />

    </div>
  );
};

export default ImageComponent;
