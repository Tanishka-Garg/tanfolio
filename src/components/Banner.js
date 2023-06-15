import React from "react";
import Image from "../assets/avatar.png";
import { fadeIn } from "../motion";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center lg:bg-site bg-no-repeat bg-cover overflow-hidden pt-8"
      id="home"
    >
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            // variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-1 text-center font-secondary lg:text-left"
          >
            <h1 className="text-[55px] font-bold leading-[0.8] lg:text-[110px]">
              TANISHKA <span>GARG</span>{" "}
            </h1>
            <div className="mb-6 text-[36px] lg:text-[60px] font secondary font-semibold uppercase leading-[1]">
              <span className="mr-4">I'm a </span>
              <TypeAnimation
                sequence={["Developer", 2000, "Writer", 2000]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </div>
            <p className="mb-8 max-w-lg mx-auto lg:mx-0">
              Fascinated by the world of technology, my journey as a developer
              began with a strong desire to create and innovative.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex mx-auto"
          >
            <img
              src={Image}
              alt=""
              style={{
                maxWidth: "65%",
                height: "auto",
                margin: "0 auto",
              }}
            />
          </motion.div>
        </div>
      </div>
      <div className="py-8"></div>
    </section>
  );
};

export default Banner;
