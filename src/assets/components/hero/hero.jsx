import React from "react";
import "./hero.css";
import Header from "../header/header";
import hero from "../../hero_image.png";
import hero_image_back from "../../hero_image_back.png";
import heart from "../../heart.png";
import calories from "../../calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { type: "tween", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <>
      <div className="hero" id="home">
        <div className="blur blur-hero"></div>
        <div className="left-h">
          <Header />
          {/* the best span  */}
          <div className="best-span">
            <motion.div
              initial={{ left: mobile ? "178px" : "238px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
            <span>The best fitness club in the city </span>
          </div>
          {/* the hero text  */}
          <div className="hero_text">
            <div>
              <span className="stroke">shape </span>
              <span>your</span>
            </div>
            <div>
              <span>ideal </span>
              <span>body</span>
            </div>
            <div>
              <span>
                in here we will help you to shape and build your ideal body and
                live up your life to the fullest
              </span>
            </div>
          </div>
          <div className="figures">
            <div>
              <span>
                <NumberCounter end={140} start={100} preFix="+" delay={4} />
              </span>
              <span>EXPERT COACHES</span>
            </div>
            <div>
              <span>
                <NumberCounter end={977} start={677} preFix="+" delay={4} />
              </span>
              <span>MEMBERS JOINED</span>
            </div>
            <div>
              <span>
                <NumberCounter end={50} start={10} preFix="+" delay={4} />
              </span>
              <span>FITNESS PROGRAMS </span>
            </div>
          </div>
          {/* buttons */}
          <div className="buttons_hero">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>

        <div className="right-h">
          <button className="btn">Join Us</button>

          <motion.div
            initial={{ right: "-1rem" }}
            whileInView={{ right: "4rem" }}
            transition={{ ...transition, type: "tween" }}
            className="heart-rate"
          >
            <img src={heart} alt="" />
            <span>588</span>
            <span>bpb</span>
          </motion.div>
          <div>
            <img src={hero} className="hero-image" alt="" />
            <motion.img
              initial={{ right: "11rem" }}
              whileInView={{ right: "20rem" }}
              transition={{ transition }}
              src={hero_image_back}
              className="hero-image-back"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
