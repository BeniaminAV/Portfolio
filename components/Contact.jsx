import { Code } from "@/public/assets";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import {
  AiOutlineMail,
  FaGithub,
  FaLinkedinIn,
  HiOutlineChevronDoubleUp,
} from "../public/assets/react-icon/index";
import { motion } from "framer-motion";
import { staggerContainer } from "@/util/motion";
import { TitleText, TypingText } from "./Custom/CustomText";

const Contact = () => {
  const router = useRouter();

  return (
    <main id="contact" className="w-full lg:h-screen">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        vieport={{ once: false, amount: 0.25 }}
        className="max-w-[1240px] m-auto px-2 py-14 w-full overflow-hidden"
      >
        <TypingText title="| Contact"></TypingText>
        <TitleText title="Get In Touch"></TitleText>

        <div className="grid  gap-8">
          {/* right */}
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            className=" w-full h-full shadow-md shadow-[#808080] rounded-xl p-4"
          >
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={Code}
                  alt="img"
                  className="rounded-xl ease-in duration-300 w-full h-[250px] cursor-pointer shadow-sm shadow-[#808080]"
                />
              </div>
              <div className="text-center">
                <h2 className="py-2 text-black">Beniamin Antal-Vaida</h2>
                <p className="text-[#DC143C]">Front-End Developer</p>
                <p className="py-4 text-black">
                  I am available for freelance or full-time positions. Contact
                  me and let's talk
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#DC143C] text-center">Connect with Me</p>
                <div className="flex items-center justify-center  text-white py-4">
                  <div
                    onClick={() =>
                      window.location.assign(
                        "https://www.linkedin.com/in/beniamin-antal-vaida-09a7a7255/"
                      )
                    }
                    className="icon-main mx-2"
                  >
                    <FaLinkedinIn />
                  </div>
                  <div
                    onClick={() =>
                      window.location.assign(
                        "https://github.com/BeniaminAV?tab=repositories"
                      )
                    }
                    className="icon-main mx-2"
                  >
                    <FaGithub />
                  </div>
                  <div
                    onClick={() =>
                      window.location.assign(
                        "https://mail.yahoo.com/d/compose/7216866964"
                      )
                    }
                    className="icon-main mx-2"
                  >
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex justify-center py-14"
        >
          <div
            onClick={() => router.push("/#home")}
            className="rounded-full shadow-sm  text-black hover:text-[#FF5733] hover:shadow-[#FF5733] shadow-[#808080]  p-4 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <HiOutlineChevronDoubleUp size={30} />
          </div>
        </div>
      </motion.div>
    </main>
  );
};

export default Contact;
