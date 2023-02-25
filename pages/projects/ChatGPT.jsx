import Image from "next/image";
import React from "react";
import { RiArrowRightFill, RiArrowLeftFill, RiStarFill } from "react-icons/ri";
import {
  Firebase,
  Github,
  NextJs,
  ReactJs,
  Tailwind,
  Auth,
  Responsive,
  TypeScript,
} from "../../public/assets/index";
import { useRouter } from "next/router";
import { imageChatGPT } from "@/public/assets/projectsImg";

const ChatGPT = () => {
  const router = useRouter();

  return (
    <div className="w-full overflow-hidden">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full overflow-x-hidden h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={imageChatGPT}
          alt="img"
          className="absolute z-1 object-fit"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-[70%]  max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">ChatGPT</h2>
          <h3>Web Application</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 rounded-xl">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I have created a web application called ChatGPT using modern web
            development technologies such as React.js, Next.js 13, NextAuth,
            Firebase, Tailwind CSS, and TypeScript. The application is fully
            responsive, meaning it can be used on various devices and screen
            sizes, including mobile phones, tablets, and desktop computers. The
            ChatGPT application features the OpenAI API, which adds
            functionality to the application by allowing users to interact with
            an artificial intelligence chatbot. This feature enables users to
            chat with an AI chatbot, powered by OpenAI's GPT-3 technology, which
            can provide helpful responses to users' inquiries. The application
            also features NextAuth, a popular library for implementing
            authentication in Next.js applications. This ensures that the user's
            data and interactions with the chatbot are secure and private. In
            addition, Firebase is used to handle user data, database management,
            and real-time messaging. The application is designed with an
            intuitive and easy-to-use interface, allowing users to easily
            navigate and interact with the chatbot. The Tailwind CSS framework
            is used to ensure a consistent and modern design throughout the
            application. Overall, ChatGPT is a modern and functional web
            application that demonstrates proficiency in various web development
            technologies and provides users with an enjoyable and engaging
            experience.
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
                  "https://chat-qx02zwa0u-beniaminav.vercel.app/"
                )
              }
              className="px-8 py-2 mt-4 mr-1 flex items-center justify-center"
            >
              <RiArrowRightFill className="mr-1" />
              <p>Demo</p>
            </button>
            <button
              onClick={() =>
                window.location.assign("https://github.com/BeniaminAV/ChatGPT")
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
              <p className="text-gray-600 py-2 flex items-center">
                <Image
                  src={NextJs}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                NextJs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <Image
                  src={ReactJs}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                ReactJs
              </p>
              <p className="text-gray-600 py-2 flex items-center justify-start">
                <Image
                  src={TypeScript}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <Image
                  src={Firebase}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <Image
                  src={Auth}
                  alt="img"
                  className="w-[25px] h-[25px] mx-1"
                />
                NextAuth
              </p>
              <p className="text-gray-600 py-2 flex items-center">
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

export default ChatGPT;
