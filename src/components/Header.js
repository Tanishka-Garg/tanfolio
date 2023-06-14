import React from "react";
import Logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

const Header = () => {
  return (
    <header className=" lg:bg-site bg-no-repeat bg-cover overflow-hidden py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="/">
            <img src={Logo} alt="" className="w-11 h-11 object-contain" />
          </a>
          <div className="flex flex-row">
            <div
              className="mx-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/tanishka-garg27/",
                  "_blank"
                )
              }
              style={{ fontSize: "2rem" }}
            >
              <AiFillLinkedin />
            </div>
            <div
              className="mx-2 cursor-pointer"
              onClick={() =>
                window.open("https://github.com/Tanishka-Garg", "_blank")
              }
              style={{ fontSize: "2rem" }}
            >
              <FaGithub />
            </div>
            <div
              className="mx-2 cursor-pointer"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1lXj6BTqYQWg6T-MXKxGohEXAMYYY5E61/view?usp=sharing",
                  "_blank"
                )
              }
              style={{ fontSize: "2rem" }}
            >
              <CgFileDocument />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
