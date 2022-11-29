import React from "react";
import { Assets } from "assets";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Hero = (props) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      id="home"
      className="relative w-full h-screen overflow-hidden bg-black menu"
    >
      {/* <div className="absolute"> */}
      <Image src={Assets.Hero} width={800} alt="Image Hero" />
      <div className="absolute top-0 flex flex-col items-center w-full h-screen md:flex-row bg-gradient-to-t from-black to-black/10 md:bg-gradient-to-l md:from-black md:via-black md:to-black-0 ">
        <div className="flex flex-col px-6 py-24 space-y-4 md:px-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#FFC945]">
            Djamboel Coffee
          </h2>
          <p className="text-sm leading-6 tracking-wide text-justify text-white md:text-base">
            Djamboel Coffee will provide a friendly, comfortable atmosphere
            where the customer can receive quality food, service and
            entertainment at a reasonable price. The coffee house will offer a
            variety of choices to the customers. Coffee and tea of all sorts
            will be offered. Juice, soda, and non-alcoholic beverages also will
            be available. Both wine and beer will be on sale. Djamboel Coffee
            will serve breakfast, lunch and dinner.
          </p>
        </div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          arrows={false}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={50}
          keyBoardControl={true}
          customTransition="all .1"
          transitionDuration={100}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="md:px-[10rem] px-2"
          className="relative flex justify-center md:px-[7rem] px-5 md:right-[0rem] md:top-[3rem]"
        >
          <div className="relative md:w-[17rem] h-full flex flex-col space-y-6">
            <Image src={Assets.Berry} alt="Berry Milk" />
            <h2 className="text-base tracking-wide text-center text-white">
              Berry Milk
            </h2>
          </div>
          <div className="relative md:w-[17rem] h-full flex flex-col space-y-6">
            <Image src={Assets.Roti} alt="Roti Enak" />
            <h2 className="text-base tracking-wide text-center text-white">
              Roti Enak
            </h2>
          </div>
          <div className="relative md:w-[17rem] h-full flex flex-col space-y-6">
            <Image src={Assets.KopiSusu} alt="Kopi Susu" />
            <h2 className="text-base tracking-wide text-center text-white">
              Kopi Susu
            </h2>
          </div>
        </Carousel>
      </div>
      {/* </div> */}
    </div>
  );
};
