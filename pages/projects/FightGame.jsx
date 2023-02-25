import Image from "next/image";
import React from "react";
import { RiArrowRightFill, RiArrowLeftFill, RiStarFill } from "react-icons/ri";
import {
  Github,
  Css,
  Html,
  Javascript,
  Canvas,
} from "../../public/assets/index";
import { useRouter } from "next/router";
import { imageFight } from "@/public/assets/projectsImg";

const FightGame = () => {
  const router = useRouter();

  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={imageFight}
          alt="img"
          className="absolute z-1 object-fit"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">FightGame</h2>
          <h3>Web Application</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 rounded-xl">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This JavaScript Fighting Game, built with HTML Canvas, offers an
            immersive and exciting gaming experience. Players can choose from a
            range of characters, each with unique fighting styles and special
            moves, to battle it out in fast-paced and intense fights. The game
            utilizes JavaScript to bring the characters to life, making their
            movements and actions smooth and realistic. The use of HTML Canvas
            allows for vivid and detailed graphics, making the battles truly
            mesmerizing. Whether you're a seasoned gamer or a beginner, this
            tutorial is an excellent way to learn the ins and outs of JavaScript
            and HTML Canvas while having fun and challenging yourself.
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
                window.location.assign("https://fight-game-six.vercel.app/")
              }
              className="px-8 py-2 mt-4 mr-1 flex items-center justify-center"
            >
              <RiArrowRightFill className="mr-1" />
              <p>Demo</p>
            </button>
            <button
              onClick={() =>
                window.location.assign(
                  "https://github.com/BeniaminAV/FightGame"
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
                  src={Html}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                HTML
              </p>
              <p className="text-gray-600 py-2 flex items-center justify-start">
                <Image src={Css} alt="img" className="w-[25px] h-[25px] mx-1" />
                CSS
              </p>
              <p className="text-gray-600 py-2 flex items-center justify-start">
                <Image
                  src={Javascript}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center justify-start">
                <Image
                  src={Canvas}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                Canvas
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

export default FightGame;
