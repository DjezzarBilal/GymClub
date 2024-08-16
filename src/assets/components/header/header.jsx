import React from "react";
import "./header.css";
import logo from "./../../logo.png";
import bars from "./../../bars.png";
import { useState } from "react";
import { Link } from "react-scroll";
function Header() {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [first, setfirst] = useState(false);

  return (
    <div className="header">
      <img className="logo" src={logo} alt="" srcset="" />
      {first === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "1rem",
            borderRadius: "5px",
          }}
        >
          <img
            src={bars}
            alt=""
            onClick={() => {
              setfirst(!first);
            }}
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="nav_list">
          <li>
            <Link
              onClick={() => {
                setfirst(false);
              }}
              to="header"
              activeClass="active"
              span={true}
              smooth={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setfirst(false);
              }}
              to="programe"
              span={true}
              smooth={true}
            >
              Programes
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setfirst(false);
              }}
              to="joinus"
              span={true}
              smooth={true}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setfirst(false);
              }}
              to="plans"
              span={true}
              smooth={true}
            >
              Plans
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setfirst(false);
              }}
              to="testomonial"
              span={true}
              smooth={true}
            >
              Testomnials
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Header;
