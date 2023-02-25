import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectItems = ({ title, backgroundImg, projectUrl, presentation }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-md shadow-[#808080] rounded-xl p-4 group hover:bg-[#DC143C]/50 ease-in duration-150 ">
      <Image
        className="rounded-xl group-hover:opacity-10 w-[550px] h-[250px]"
        src={backgroundImg}
        alt="code"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{presentation}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 p-3 rounded-lg bg-[#DC143C] hover:bg-[#FF5733] text-white hover:text-white ese-in duration-150 font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
