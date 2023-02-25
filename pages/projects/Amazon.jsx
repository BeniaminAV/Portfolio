import Image from "next/image";
import React from "react";
import { RiArrowRightFill, RiArrowLeftFill, RiStarFill } from "react-icons/ri";
import {
  Firebase,
  Github,
  NextJs,
  ReactJs,
  Tailwind,
  Webhook,
  Stripe,
  Auth,
  Responsive,
} from "../../public/assets/index";
import { useRouter } from "next/router";
import { imageAmazon } from "@/public/assets/projectsImg";

const Amazon = () => {
  const router = useRouter();

  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={imageAmazon}
          alt="img"
          className="absolute z-1 object-fit"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Amazon</h2>
          <h3>Shopping Application</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 rounded-xl">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            My application built with NextJs is an online store that enables
            users to log in through their Google account using NextAuth. Users
            can make payments with Stripe and view their order history saved on
            Firebase. The design is created with TailwindCSS, providing a smooth
            and intuitive shopping experience.
          </p>

          <p className="text-sm py-4 text-gray-400 flex items-start justify-start hover:text-gray-600">
            <RiStarFill className="mt-0.5 mr-1" />
            If you press the demo button and it doesn't work right away, please
            refresh because it's not the best host. Thank you kindly for your
            understanding.
          </p>

          <p>
            Below is a button for a <strong>"Demo"</strong> of the project and a
            button to the
            <strong>"Github"</strong> for the code portion.
          </p>

          <div className="flex items-center justify-start">
            <button
              onClick={() =>
                window.location.assign(
                  "https://amazon-9fxkg5wrf-beniaminav.vercel.app/"
                )
              }
              className="px-8 py-2 mt-4 mr-1 flex items-center justify-center"
            >
              <RiArrowRightFill className="mr-1" />
              <p>Demo</p>
            </button>
            <button
              onClick={() =>
                window.location.assign("https://github.com/BeniaminAV/Amazon")
              }
              className="px-8 py-2 mt-4 flex items-center justify-center"
            >
              <Image
                src={Github}
                alt="img"
                className="w-[20px] h-[20px] mr-1"
              />
              <p>Github</p>
            </button>
          </div>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center justify-start">
                <Image
                  src={NextJs}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                NextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center justify-start">
                <Image
                  src={ReactJs}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                ReactJs
              </p>
              <p className="text-gray-600 py-2 flex items-center justify-start">
                <Image
                  src={Webhook}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                Webhooks
              </p>
              <p className="text-gray-600 py-2 flex items-center justify-start">
                <Image
                  src={Stripe}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                Stripe
              </p>
              <p className="text-gray-600 py-2 flex items-center justify-start">
                <Image
                  src={Firebase}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center justify-start">
                <Image
                  src={Auth}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                NextAuth
              </p>
              <p className="text-gray-600 py-2 flex items-center justify-start">
                <Image
                  src={Tailwind}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                TailwindCSS
              </p>
              <p className="text-gray-600 py-2 flex items-center justify-start">
                <Image
                  src={Responsive}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                Responsive
              </p>
            </div>
          </div>
        </div>
        <button
          onClick={() => router.push("/#projects")}
          className="px-8 py-2 mt-4 flex items-center justify-center"
        >
          <RiArrowLeftFill className="mr-1" />
          <p className="cursor-pointer">Back</p>
        </button>
      </div>
    </div>
  );
};

export default Amazon;
