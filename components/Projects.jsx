import React from "react";
import ProjectItems from "./ProjectItems";
import {
  imageAmazon,
  imageBank,
  imageChatGPT,
  imageDashboard,
  imageDisney,
  imageEmag,
  imageFight,
  imageGithub,
  imageMeta,
  imageSpotify,
  imageTinder,
} from "../public/assets/projectsImg/index";
import { motion } from "framer-motion";
import { staggerContainer } from "@/util/motion";
import { TitleText, TypingText } from "./Custom/CustomText";

const Projects = () => {
  return (
    <main id="projects" className="w-full overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        vieport={{ once: false, amount: 0.25 }}
        className="max-w-[1240px] mx-auto px-2 py-24"
      >
        <TypingText title="| Projects"></TypingText>
        <TitleText title="What I've Built"></TitleText>

        <div className="grid md:grid-cols-2 gap-8">
          <div data-aos="fade-right" data-aos-duration="1500">
            <ProjectItems
              title="ChatGPT"
              backgroundImg={imageChatGPT}
              projectUrl="/projects/ChatGPT"
              presentation="Web Application"
            />
          </div>

          <div data-aos="fade-left" data-aos-duration="1500">
            <ProjectItems
              title="Emag"
              backgroundImg={imageEmag}
              projectUrl="/projects/Emag"
              presentation="Web Application"
            />
          </div>

          <div data-aos="fade-right" data-aos-duration="1500">
            <ProjectItems
              title="Amazon"
              backgroundImg={imageAmazon}
              projectUrl="/projects/Amazon"
              presentation="Web Application"
            />
          </div>

          <div data-aos="fade-left" data-aos-duration="1500">
            <ProjectItems
              title="Disney"
              backgroundImg={imageDisney}
              projectUrl="/projects/Disney"
              presentation="Web Application"
            />
          </div>

          <div data-aos="fade-right" data-aos-duration="1500">
            <ProjectItems
              title="Modern Bank"
              backgroundImg={imageBank}
              projectUrl="/projects/Bank"
              presentation="Presentation Website"
            />
          </div>

          <div data-aos="fade-left" data-aos-duration="1500">
            <ProjectItems
              title="Metaversus"
              backgroundImg={imageMeta}
              projectUrl="/projects/Metaversus"
              presentation="Presentation Website"
            />
          </div>

          <div data-aos="fade-right" data-aos-duration="1500">
            <ProjectItems
              title="Dashboard"
              backgroundImg={imageDashboard}
              projectUrl="/projects/Dashboard"
              presentation="Web Application"
            />
          </div>

          <div data-aos="fade-left" data-aos-duration="1500">
            <ProjectItems
              title="Github Finder"
              backgroundImg={imageGithub}
              projectUrl="/projects/GithubFinder"
              presentation="Web Application"
            />
          </div>

          <div data-aos="fade-right" data-aos-duration="1500">
            <ProjectItems
              title="Spotify"
              backgroundImg={imageSpotify}
              projectUrl="/projects/Spotify"
              presentation="Web Application"
            />
          </div>

          <div data-aos="fade-left" data-aos-duration="1500">
            <ProjectItems
              title="Tinder"
              backgroundImg={imageTinder}
              projectUrl="/projects/Tinder"
              presentation="Web Application"
            />
          </div>

          <div data-aos="fade-right" data-aos-duration="1500">
            <ProjectItems
              title="FightGame"
              backgroundImg={imageFight}
              projectUrl="/projects/FightGame"
              presentation="Web Application"
            />
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Projects;
