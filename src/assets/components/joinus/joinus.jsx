import React, { useRef } from "react";
import "./joinus.css";
import emailjs from "@emailjs/browser";
function Joinus() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ozb48js",
        "template_jc2dg7w",
        form.current,
        "vuoaDuvcRxzMm3fdg"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="joinus" id="joinus">
      <div className="right-j">
        <div>
          <hr />
          <span className="stroke">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span> YOUR BODY </span>
          <span className="stroke">WITH US ?</span>
        </div>
      </div>
      <div className="left-j">
        <form
          ref={form}
          onSubmit={sendEmail}
          action=""
          className="email_container"
        >
          <input
            type="email"
            name="email"
            id=""
            placeholder="enter your email here "
          />
          <button className="btn btn-j">Join us</button>
        </form>
      </div>
    </div>
  );
}

export default Joinus;
