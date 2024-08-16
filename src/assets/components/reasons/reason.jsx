import React from "react";
import "./reason.css";
import image1 from "./../../image1.png";
import image2 from "./../../image2.png";
import image3 from "./../../image3.png";
import image4 from "./../../image4.png";
import nb from "./../../nb.png";
import nike from "./../../nike.png";
import adidas from "./../../adidas.png";
import tick from "./../../tick.png";

const Reason = () => {
  return (
    <div className="reasons" id="reasons">
      <div className="image-container">
        <img src={image1} alt="" />

        <img src={image2} alt="" />

        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="text-container">
        <div className="reasons-title">
          <span>SOME REASONS</span>
        </div>
        <div className="text-header">
          <span className="stroke">WHY </span>
          <span>CHOOSE US ?</span>
        </div>
        <div className="reasons-list">
          <div>
            <img src={tick} alt="" />
            <span>OVER +140 expert coach</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>train smarter and faster then before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reliable partner</span>
          </div>
        </div>
        <div className="text-footer">
          <span
            style={{
              color: "var(--gray)",
              fontWeight: "normal",
              margin: "1rem",
            }}
          >
            OUR PARTnER
          </span>
          <div className="paartt">
            <img src={nb} alt="" />
            <img src={adidas} alt="" />
            <img src={nike} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reason;
