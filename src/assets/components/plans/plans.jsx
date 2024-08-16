import React from "react";
import { plansData } from "./../../../data/plansData";
import whiteTick from "./../../../assets/whiteTick.png";
import "./plans.css";
function Plans() {
  return (
    <div className="plans-section" id="plans">
      <div className="blur blur-p-1"></div>
      <div className="blur blur-p-2"></div>
      <div className="programe-header">
        <span className="stroke">READY TO START </span>
        <span>YOUR JOURNEY</span>
        <span className="stroke">NOW WITH US </span>
      </div>
      <div className="plans-card">
        {plansData.map((plan, i) => {
          let { icon, name, price, features } = plan;

          return (
            <div className="plan" key={i}>
              {icon}
              <span>{name}</span>
              <span>$ {price}</span>
              <div className="features">
                {features.map((feat, i) => {
                  return (
                    <div>
                      <img src={whiteTick} alt="" />
                      <span key={i}>{feat}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <span>see more benefits -{">"}</span>
                <span></span>
              </div>
              <button className="btn">Join now</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Plans;
