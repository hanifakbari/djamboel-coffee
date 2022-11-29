import { Assets } from "assets";
import React from "react";
import Image from "next/image";

export const About = () => {
  return (
    <div className="w-full h-screen px-4 py-10 bg-black">
      <h2 className="w-full text-3xl text-center text-white uppercase font-body">
        About
      </h2>
      <div className="flex flex-col items-center justify-center h-full max-w-6xl mx-auto space-y-10 md:justify-between md:flex-row">
        <Image src={Assets.Djamboel} />
        <p className="text-sm text-justify md:text-right text-white md:text-base w-full md:w-[45%]">
          Established in 2015. Djamboel Coffee is a retail coffee entrepreneur
          that serves the best quality coffee for consumers. On the first day of
          opening, we managed to sell approximately 100 cups of coffee. And as
          time goes by, we are increasingly known by the surrounding community,
          especially students and students. We want our existence to create a
          new standard for quality coffee for consumers.
        </p>
      </div>
    </div>
  );
};
