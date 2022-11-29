import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Assets } from "../../../assets";
import { NavMobile } from "../NavMobile";

export const Navbar = () => {
  const [popupMenuShow, setPopupMenuShow] = useState(false);
  const openPopupMenu = () => setPopupMenuShow(true);
  const closePopupMenu = () => setPopupMenuShow(false);
  return (
    <div
      className="nav top-0 fixed z-[100] w-full"
      style={{ transition: "0.5s" }}
    >
      <div className="block w-full">
        <div className="z-[10] absolute w-full before:-z-[1] before:absolute before:w-full before:h-full bg-transparent transition ring-1 ring-white/0">
          <nav className="flex items-center justify-between w-full max-w-6xl px-4 py-3 mx-auto xl:px-0 md:py-2">
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
            <div className="flex flex-row space-x-14">
              <ul className="items-center hidden space-x-14 md:flex">
                <li>
                  <Link href="# ">
                    <span className="w-full py-3 text-sm font-light text-white  transition  hover:text-[#FFC945]">
                      Home
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="# ">
                    <span
                      href=""
                      className="flex flex-row items-center justify-center w-full py-3 text-sm text-white  transition  hover:text-[#FFC945] font-light"
                    >
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="# ">
                    <span
                      href=""
                      className="flex flex-row items-center justify-center w-full py-3 text-sm text-white  transition  hover:text-[#FFC945] font-light"
                    >
                      Menu
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="# ">
                    <span className="w-full py-3 text-sm text-white transition  hover:text-[#FFC945] font-light ">
                      Gallery
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="# ">
                    <span className="w-full py-3 text-sm text-white transition  hover:text-[#FFC945] font-body ">
                      Contact Us
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <button
              type="button"
              className="block md:hidden "
              onClick={() => {
                popupMenuShow ? closePopupMenu() : openPopupMenu();
              }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={Assets.HamburgerBar}
                  alt="Hamburger Bar"
                  width={32}
                  height={32}
                />
              </div>
            </button>
            <NavMobile
              show={popupMenuShow}
              onClick={() => {
                popupMenuShow ? closePopupMenu() : openPopupMenu();
              }}
            />
          </nav>
        </div>
      </div>
    </div>
  );
};
