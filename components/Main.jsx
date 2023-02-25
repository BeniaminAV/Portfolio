import React from "react";
import {
  AiOutlineMail,
  FaGithub,
  FaLinkedinIn,
} from "../public/assets/react-icon/index";
import { motion } from "framer-motion";
import { staggerContainer } from "@/util/motion";

const Main = () => {
  return (
    <main id="home" className="w-full h-screen text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center"
      >
        <div>
          <p
            data-aos="fade-down"
            data-aos-duration="1000"
            className="uppercase text-sm tracking-widest text-black"
          >
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="py-4 text-black"
          >
            HI, I'm <span className="text-[#DC143C]">Beniamin</span>
          </h1>
          <h1
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="py-4 text-black"
          >
            A Front-End Web Developer
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            className="py-4 text-black max-w-[70%] m-auto"
          >
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </p>

          <div
            className="flex items-center justify-between max-w-[230px] m-auto py-4"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <div
              onClick={() =>
                window.location.assign(
                  "https://www.linkedin.com/in/beniamin-antal-vaida-09a7a7255/"
                )
              }
              className="icon-main"
            >
              <FaLinkedinIn />
            </div>
            <div
              onClick={() =>
                window.location.assign(
                  "https://github.com/BeniaminAV?tab=repositories"
                )
              }
              className="icon-main"
            >
              <FaGithub />
            </div>
            <div
              onClick={() =>
                window.location.assign(
                  "https://mail.yahoo.com/d/compose/7216866964"
                )
              }
              className="icon-main"
            >
              <AiOutlineMail />
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Main;
