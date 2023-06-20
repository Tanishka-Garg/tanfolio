import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../motion";

import {
  SiPython,
  SiCplusplus,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiNodedotjs,
  SiMysql,
  SiExpress,
  SiGit,
} from "react-icons/si";
const Tech = () => {
  const Skillcard = ({ title, icon }) => {
    return (
      <div className="w-27 h-27">
        <div className="mb-8 my-4 items-center">
          <div
            className="object-contain text-accent"
            style={{ fontSize: "3rem" }}
          >
            {icon}
          </div>

          <p className="text-accent font-bold mb-2">{title}</p>
        </div>
      </div>
    );
  };
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] lg:bg-site bg-no-repeat bg-cover overflow-hidden pt-8"
      id="tech"
    >
      <div className="container mx-auto ">
        <div>
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
          >
            <p className="mb-6 mt-4 text-[36px] lg:text-[50px] font secondary font-semibold uppercase leading-[1]">
              My Skills
            </p>
          </motion.div>
          <motion.p
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            className="mb-6 max-w-lg mx-auto lg:mx-0"
          >
            Code is my playground, and I've got an arsenal of skills that would
            make a Swiss Army Knife jealous. I speak the language of Python,
            JavaScript like a true polyglot. CSS is my fashion consultant, and
            SQL is my secret weapon for taming unruly data. With a dash of
            creativity and a sprinkle of caffeine, I turn complex problems into
            elegant solutions.
          </motion.p>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="lg:flex mx-auto"
          >
            <div className="mt-8 flex flex-row flex-wrap justify-center gap-10 text-center">
              <Skillcard title={"C++"} icon={<SiCplusplus />} />
              <Skillcard title={"Python"} icon={<SiPython />} />
              <Skillcard title={" HTML"} icon={<SiHtml5 />} />
              <Skillcard title={" CSS"} icon={<SiCss3 />} />
              <Skillcard title={" Javascript"} icon={<SiJavascript />} />
              <Skillcard title={" React.js"} icon={<SiReact />} />
              <Skillcard title={" Tailwind"} icon={<SiTailwindcss />} />
              <Skillcard title={" Bootstrap"} icon={<SiBootstrap />} />
              <Skillcard title={" MongoDB"} icon={<SiMongodb />} />
              <Skillcard title={" Node.js"} icon={<SiNodedotjs />} />
              <Skillcard title={" Express.js"} icon={<SiExpress />} />
              <Skillcard title={" MySQL"} icon={<SiMysql />} />
              <Skillcard title={" Git"} icon={<SiGit />} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
