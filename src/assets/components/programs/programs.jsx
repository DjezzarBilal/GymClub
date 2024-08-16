import React from "react";
import { programsData } from "./../../../data/programsData";
import rightArrow from "./../../rightArrow.png";
import "./programs.css";
function Programs() {
  return (
    <div className="programe" id="programe">
      <div className="programe-header">
        <span className="stroke">Explore Our </span>
        <span>Programs</span>
        <span className="stroke">To shape you</span>
      </div>
      <div className="progrm-cat">
        {programsData.map((data) => {
          const { image, heading, details } = data;
          return (
            <div className="category">
              {image}
              <span>{heading}</span>
              <span>{details}</span>
              <div className="join-now">
                <span>Join now</span> <img src={rightArrow} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Programs;
