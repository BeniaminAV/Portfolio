import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Logo } from "../public/assets/index";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineMenu,
  FaGithub,
  FaLinkedinIn,
} from "../public/assets/react-icon/index";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#1f2937");
  const [linkColor, setLinkColor] = useState("#000000");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/projects/emag" ||
      router.asPath === "/projects/amazon" ||
      router.asPath === "/projects/bank" ||
      router.asPath === "/projects/metaversus" ||
      router.asPath === "/projects/dashboard" ||
      router.asPath === "/projects/spotify" ||
      router.asPath === "/projects/tinder" ||
      router.asPath === "/projects/fightgame" ||
      router.asPath === "/projects/games" ||
      router.asPath === "/projects/disney" ||
      router.asPath === "/projects/githubfinder"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#FFFFFF");
      setLinkColor("#000000");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-sm shadow-[#808080] ease-in duration-100 z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          onClick={() => router.push("/")}
          src={Logo}
          className="w-[150px] h-[50px] cursor-pointer"
          alt="logo"
        />
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li
              onClick={() => router.push("/")}
              className="ml-10 text-sm uppercase hover:border-b border-[#DC143C]  hover:text-[#DC143C]"
            >
              Home
            </li>
            <li
              onClick={() => router.push("/#about")}
              className="ml-10 text-sm uppercase hover:border-b border-[#DC143C] hover:text-[#DC143C]"
            >
              About
            </li>
            <li
              onClick={() => router.push("/#skills")}
              className="ml-10 text-sm uppercase hover:border-b border-[#DC143C] hover:text-[#DC143C]"
            >
              Skills
            </li>
            <li
              onClick={() => router.push("/#projects")}
              className="ml-10 text-sm uppercase hover:border-b border-[#DC143C] hover:text-[#DC143C]"
            >
              Project
            </li>
            <li
              onClick={() => router.push("/#contact")}
              className="ml-10 text-sm uppercase hover:border-b border-[#DC143C] hover:text-[#DC143C]"
            >
              Contact
            </li>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden hover:scale-110 ease-in duration-150 cursor-pointer rounded-full shadow-md text-black hover:text-[#FF5733] hover:shadow-[#FF5733] shadow-[#808080] p-3"
          >
            <AiOutlineMenu />
          </div>
        </div>
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ease-in duration-500"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-140%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="flex w-full items-center justify-between">
            <Link href="/">
              <Image
                onClick={() => setNav(false)}
                src={Logo}
                alt="logo"
                className="w-[120px] h-[44px]"
              />
            </Link>
            <div
              onClick={handleNav}
              className="rounded-full shadow-md text-black hover:text-[#FF5733] hover:shadow-[#FF5733] shadow-[#808080] p-3 cursor-pointer hover:scale-110 ease-in duration-150"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              Let's build something legendary together
            </p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#DC143C]"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#DC143C]"
                >
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#DC143C]"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#DC143C]"
                >
                  Project
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm hover:text-[#DC143C]"
                >
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-20">
              <p className="uppercase tracking-widest text-[#DC143C]">
                Let's Connect
              </p>
              <div className="flex items-center justify-center py-2 w-full sm:w-[80%]">
                <div
                  onClick={() =>
                    window.location.assign(
                      "https://www.linkedin.com/in/beniamin-antal-vaida-09a7a7255/"
                    )
                  }
                  className="icon-nav mx-2"
                >
                  <FaLinkedinIn />
                </div>
                <div
                  onClick={() =>
                    window.location.assign(
                      "https://github.com/BeniaminAV?tab=repositories"
                    )
                  }
                  className="icon-nav mx-2"
                >
                  <FaGithub />
                </div>
                <div
                  onClick={() =>
                    window.location.assign(
                      "https://mail.yahoo.com/d/compose/7216866964"
                    )
                  }
                  className="icon-nav mx-2"
                >
                  <AiOutlineMail />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
