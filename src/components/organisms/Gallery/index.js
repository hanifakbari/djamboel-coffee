import React from "react";
import { Assets } from "assets";
import Image from "next/image";

export const Gallery = () => {
  return (
    <div id="gallery" className="w-full h-screen px-4 py-10 bg-black">
      <h2 className="w-full text-3xl text-center text-white uppercase font-body">
        Gallery
      </h2>
      <div className="flex items-center justify-evenly max-w-6xl mx-auto py-[5rem]">
        <div className="md:w-[20rem] h-full ">
          <Image src={Assets.Gallery1} alt="Gallery 1" />
        </div>
        <div className="md:w-[20rem] h-full ">
          <Image src={Assets.Gallery2} alt="Gallery 2" />
        </div>
        <div className="md:w-[20rem] h-full ">
          <Image src={Assets.Gallery3} alt="Gallery 3" />
        </div>
      </div>
    </div>
  );
};
