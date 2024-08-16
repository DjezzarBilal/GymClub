import React, { useState } from "react";
import "./testomonial.css";
import testimonialsData from "./../../../data/testimonialsData";
import leftArrow from "./../../../assets/leftArrow.png";
import rightArrow from "./../../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Testomonial = () => {
  const [selected, setSelected] = useState(0);
  const tlength = testimonialsData.length;
  const transition = { type: "tween", duration: 3 };
  return (
    <div className="Testomonial" id="testomonial">
      <div className="left-tes">
        <span>Testimonials</span>
        <span className="stroke">what they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          <span>-{testimonialsData[selected].status}</span>
        </span>
      </div>
      <div className="right-tes">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <div className="arrows">
          <img
            onClick={() =>
              selected === 0
                ? setSelected(tlength - 1)
                : setSelected((prev) => prev - 1)
            }
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() =>
              selected === tlength - 1
                ? setSelected(0)
                : setSelected(selected + 1)
            }
            src={rightArrow}
            alt=""
          />
        </div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
      </div>
    </div>
  );
};

export default Testomonial;
