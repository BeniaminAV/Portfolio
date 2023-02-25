"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../../util/motion";

export const TypingText = ({ title }) => (
  <motion.p
    variants={textContainer}
    className="uppercase text-xl tracking-widest text-[#DC143C]"
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === "" ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className="py-4 text-black"
  >
    {title}
  </motion.h2>
);
