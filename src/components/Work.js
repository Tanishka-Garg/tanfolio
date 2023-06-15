import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../motion";
import { FaGithub } from "react-icons/fa";

import buzzbizz_img from "../assets/projectImg/buzzbizz.png";
import listify_img from "../assets/projectImg/listify.png";
import tinkertext_img from "../assets/projectImg/tinkertext.png";

const ProjectCard = ({ name, description, image, github_link }) => {
  return (
    <motion.div
      animate={{ x: [null, 100, 0] }}
      whileHover={{ scale: [null, 1.2, 1.2] }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className=" group relative overflow-hidden border-2 border-white/50 rounded-2xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl "
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(github_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <div className="w-1/2 h-1/2 object-contain">
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-accent font-bold">
          <h3>{name}</h3>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};
const Work = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] lg:bg-site bg-no-repeat bg-cover overflow-hidden pt-8"
      id="work"
    >
      <div className="container mx-auto">
        <div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
          >
            <p className="mb-6 mt-4 text-[36px] lg:text-[50px] font secondary font-semibold uppercase leading-[1]">
              my projects
            </p>
          </motion.div>
          <motion.p
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="mb-5 max-w-lg mx-auto lg:mx-0"
          >
            Welcome to my projects section, where I showcase the fruits of my
            coding endeavors. Here, you will find a collection of some exciting
            creations, each a testament to my passion for development.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="mt-8 flex flex-row flex-wrap justify-center gap-10 text-center"
          >
            <ProjectCard
              name={"listify"}
              description={
                "Web-based platform that allows users to save and organize bucket lists and notes, making your dreams and ideas easily accessible"
              }
              image={listify_img}
              github_link={
                "https://competent-kilby-fff24a.netlify.app/icons?name=di"
              }
            />
            <ProjectCard
              name={"buzzbizz"}
              description={
                "A dynamic website offering comprehensive news coverage across diverse topics using real-time data from the News API."
              }
              image={buzzbizz_img}
              github_link={
                "https://competent-kilby-fff24a.netlify.app/icons?name=di"
              }
            />
            <ProjectCard
              name={"tinkertext"}
              description={
                "A versatile online text manipulation tool that enables users to manipulate text to while also providing calculations for read time, character count, and word count."
              }
              image={tinkertext_img}
              github_link={
                "https://competent-kilby-fff24a.netlify.app/icons?name=di"
              }
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
