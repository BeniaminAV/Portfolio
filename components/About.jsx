"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Beni, Code } from "../public/assets/index";
import { staggerContainer } from "@/util/motion";
import { TitleText, TypingText } from "./Custom/CustomText";

const About = () => {
  return (
    <main
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 overflow-hidden"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8"
      >
        <div className="col-span-2">
          <TypingText title="| About"></TypingText>

          <TitleText title="Who I Am"></TitleText>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            className="py-2 text-black"
          >
            Hi, I'm Beniamin Antal-Vaida and I'm currently in my final year at
            the Faculty of Electrical Engineering and Computer Science at the
            Transilvania University of Brasov. My passion for web development
            started to grow during my second year of college, and since then, I
            have worked on numerous personal projects to improve my skills and
            reach my goal of becoming a successful web developer. I am
            proficient in technologies such as HTML, CSS, JavaScript, React,
            TailwindCSS, NextJS, Firebase, Mongo Webhooks, Redux, and many
            others. I am eager to learn and advance in my career through an
            internship or a job. I am a talented, dedicated, and driven young
            professional who is ready to take on any challenge and grow
            professionally.
          </p>
          <Link href="/#projects">
            <p
              data-aos="fade-in"
              data-aos-duration="1500"
              className="py-2 text-[#FF5733] underline cursor-pointer hover:text-[#DC143C]"
            >
              Check out some of my latest projects.
            </p>
          </Link>
        </div>

        <div data-aos="fade-left" data-aos-duration="1500">
          <div className="w-full h-auto m-auto cursor-pointer shadow-md shadow-[#808080] rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <Image src={Beni} alt="about" className="rounded-xl " />
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default About;
