import Link from "next/link";
import React, { useState } from "react";
import { Assets } from "assets";
import Image from "next/image";

export const NavMobile = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div
      style={{ transition: "0.5s" }}
      className={`${
        props.show ? "top-0 left-0" : " -top-full left-0"
      } fixed h-[32rem] w-full bg-black transition delay-150 duration-300 ease-in-out md:hidden`}
    >
      <div className="flex flex-col px-4 py-3">
        <div className="flex items-center justify-between mb-12">
          <div className="flex flex-row items-center space-x-2">
            <Link href="# ">
              <div className="relative md:w-[3.5rem] w-[3.5rem] h-full flex justify-center items-center">
                <Image src={Assets.Djamboel} alt="Logo Djamboel" />
              </div>
            </Link>
            <span className="text-lg font-bold text-white">
              Djamboel Coffee
            </span>
          </div>
          <button type="button" onClick={props.onClick}>
            <div className="relative w-full h-full">
              <Image
                src={Assets.CloseBar}
                alt="Hamburger Bar"
                width={32}
                height={32}
              />
            </div>
          </button>
        </div>
        <div className="">
          <ul className="flex flex-col space-y-8">
            <li>
              <Link href="# ">
                <span className="w-full py-3 text-sm font-light text-white  transition  hover:text-[#7F665C]">
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link href="# ">
                <span className="w-full py-3 text-sm text-white transition  hover:text-[#7F665C] font-light ">
                  Menu
                </span>
              </Link>
            </li>
            <li>
              <Link href="# ">
                <span className="w-full py-3 text-sm text-white transition  hover:text-[#7F665C] font-light ">
                  Gallery
                </span>
              </Link>
            </li>
            <li>
              <Link href="# ">
                <span className="w-full py-3 text-sm text-white transition  hover:text-[#7F665C] font-body ">
                  Contact Us
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
