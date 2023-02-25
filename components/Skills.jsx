import {
  Css,
  Firebase,
  Github,
  Html,
  Javascript,
  Mongo,
  NextJs,
  Node,
  ReactJs,
  Tailwind,
} from "@/public/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/util/motion";
import { TitleText, TypingText } from "./Custom/CustomText";

const Skills = () => {
  return (
    <main id="skills" className="w-full lg:h-screen p-2 overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        vieport={{ once: false, amount: 0.25 }}
        className="max-w-[1240px] mx-auto flex flex-col justify-center h-full"
      >
        <TypingText title="| Skills"></TypingText>
        <TitleText title="What I Can Do"></TitleText>
        <div
          data-aos="fade-in"
          data-aos-duration="1500"
          className="grid grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-8"
        >
          <div className="skills">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} className="w-[64px] h-[64px]" alt="html" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className='skills-name'>HTML</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} className="w-[64px] h-[64px]" alt="css" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="skills-name">CSS</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Javascript}
                  className="w-[64px] h-[64px]"
                  alt="js"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className='skills-name'>JavaScript</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={ReactJs}
                  className="w-[64px] h-[64px]"
                  alt="react"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className='skills-name'>REACT</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Tailwind}
                  className="w-[64px] h-[64px]"
                  alt="tailwind"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className='skills-name'>Tailwind</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJs} className="w-[64px] h-[64px]" alt="next" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className='skills-name'>Next</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Firebase}
                  className="w-[64px] h-[64px]"
                  alt="firebase"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className='skills-name'>Firebase</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} className="w-[64px] h-[64px]" alt="git" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className='skills-name'>Github</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mongo} className="w-[64px] h-[64px]" alt="mongo" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className='skills-name'>Mongo</p>
              </div>
            </div>
          </div>
          <div className="skills">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Node} className="w-[64px] h-[64px]" alt="node" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className='skills-name'>Node</p>
              </div>
            </div> 
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Skills;
