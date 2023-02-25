import Image from "next/image";
import React from "react";
import { RiArrowRightFill, RiArrowLeftFill, RiStarFill } from "react-icons/ri";
import {
  Github,
  ReactJs,
  Tailwind,
  Responsive,
  Framer,
} from "../../public/assets/index";
import { useRouter } from "next/router";
import { imageMeta } from "@/public/assets/projectsImg";

const Metaversus = () => {
  const router = useRouter();

  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={imageMeta}
          alt="img"
          className="absolute z-1 object-fit"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Metaversus</h2>
          <h3>Presentation Website</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 rounded-xl">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This website, built with React, Next.js, and incorporating Framer
            Motion & Tailwind CSS, will provide a smooth and attractive browsing
            experience for visitors. With its modern and intuitive design, it
            will be user-friendly and clearly present information about the
            product or service. The gentle animations from Framer Motion will
            add a touch of dynamism to the page, while styling with Tailwind CSS
            ensures a uniform and professional arrangement of the content.
            Additionally, using Next.js, the website will be fast and efficient,
            providing a quick loading experience for visitors.
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
                window.location.assign("https://metaversus-omega.vercel.app/")
              }
              className="px-8 py-2 mt-4 mr-1 flex items-center justify-center"
            >
              <RiArrowRightFill className="mr-1" />
              <p>Demo</p>
            </button>
            <button
              onClick={() =>
                window.location.assign(
                  "https://github.com/BeniaminAV/Metaversus"
                )
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
                  src={Framer}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                Motion
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

export default Metaversus;
