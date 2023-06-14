import React from "react";
import { BiHomeHeart, BiBriefcase } from "react-icons/bi";
import { BsClipboardData, BsChatDots } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";

import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/80">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60x] h-[60x] flex items-center justify-center"
          >
            <BiHomeHeart />
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60x] h-[60x] flex items-center justify-center"
          >
            <GiSkills />
          </Link>
          <Link
            to="tech"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60x] h-[60x] flex items-center justify-center"
          >
            <BsClipboardData />
          </Link>
          <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60x] h-[60x] flex items-center justify-center"
          >
            <BiBriefcase />
          </Link>
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60x] h-[60x] flex items-center justify-center"
          >
            <BsChatDots />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
