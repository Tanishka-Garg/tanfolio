import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../motion";
import { SiWebpack } from "react-icons/si";
import { BsPencilSquare } from "react-icons/bs";
import { GiArtificialIntelligence } from "react-icons/gi";

const About = () => {
  const ServiceCard = ({ title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-400 p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <div className="object-contain" style={{ fontSize: "3rem" }}>
              {icon}
            </div>

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] lg:bg-site bg-no-repeat bg-cover overflow-hidden pt-8"
      id="about"
    >
      <div className="container mx-auto ">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
        >
          <p className="mb-6 mt-4 text-[36px] lg:text-[50px] font secondary font-semibold uppercase leading-[1]">
            overview
          </p>
        </motion.div>
        <motion.p
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          className="mb-5 max-w-lg mx-auto lg:mx-0"
        >
          As a beginner developer, I have a voracious appetite for learning and
          a knack for turning lines of code into digital wonders. Join me on
          this captivating journey where curiosity reigns and weirdness is
          celebrated!
        </motion.p>
        <div className="mt-8 flex flex-col lg:flex-row gap-5">
          <ServiceCard title={"Web Developer"} icon={<SiWebpack />} />
          <ServiceCard
            title={"Machine Learning"}
            icon={<GiArtificialIntelligence />}
          />

          <ServiceCard title={"Writer"} icon={<BsPencilSquare />} />
        </div>
      </div>
      <div className="mt-10"></div>
    </section>
  );
};

export default About;
