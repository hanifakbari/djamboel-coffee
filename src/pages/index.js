import { Hero, About, Menu, Team } from "components";
import React, { Fragment } from "react";
import { NextSeo } from "next-seo";
import { Assets } from "assets";
import Image from "next/image";

export default function Home() {
  return (
    <Fragment>
      <>
        <NextSeo
          title="Djamboel Coffee"
          description="Djamboel Coffee akan memberikan suasana yang bersahabat, nyaman dimana pelanggan dapat menerima makanan, layanan dan hiburan berkualitas dengan harga yang wajar."
          canonical="https://djamboel-coffee-hanifakbari.vercel.app/"
          openGraph={{
            url: "https://djamboel-coffee-hanifakbari.vercel.app/",
            title: "Djamboel Coffee",
            description:
              "Djamboel Coffee akan memberikan suasana yang bersahabat, nyaman dimana pelanggan dapat menerima makanan, layanan dan hiburan berkualitas dengan harga yang wajar.",
            images: [
              {
                url: "/public/djamboel.svg",
                width: 1200,
                height: 1200,
                alt: "seoDjamboelCoffee",
                type: "image/svg",
              },
            ],
            site_name: "Djamboel Coffee",
          }}
          twitter={{
            handle: "@handle",
            site: "@site",
            cardType: "summary_large_image",
          }}
        />
      </>
      <>
        <Hero />
        <About />
        <div className="w-full h-[280vh] bg-black relative overflow-hidden">
          <Image src={Assets.Menu} />
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black via-black/50 to-black/[85%]">
            <Menu />
            <Team />
          </div>
        </div>
        <div className="w-full h-screen px-4 py-10 bg-black">
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
        <div className="relative w-full h-screen overflow-hidden bg-black">
          <Image src={Assets.Review} alt="Image Review" width={1300} />
          <div className="absolute top-0 w-full h-screen px-4 py-10 bg-gradient-to-b from-black via-black/50 to-black/90">
            <h2 className="w-full text-3xl text-center text-white uppercase font-body">
              Clients Review
            </h2>
            <div className="py-[5rem] flex justify-center flex-row space-x-6">
              <div className="w-[30rem] h-[14rem] bg-black/20 backdrop-blur-md py-6 px-8 rounded-lg">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-2">
                    <Image src={Assets.Star} alt="Image Star" />
                    <p className="text-sm text-justify text-white">
                      Amazing food. PERIOD. Service is always perfect, food is
                      always on point, and the staff is very friendly and
                      accommodating. Always looking forward to this place with
                      my friends, the fried vanilla ice cream is exceptionally
                      good
                    </p>
                  </div>
                  <div className="flex flex-row items-center space-x-4">
                    <span className="bg-[#2e2e2e] w-[3.5rem] h-[3.5rem] text-white font-light text-3xl justify-center flex items-center rounded-full">
                      S
                    </span>
                    <h2 className="text-lg text-white ">Sukma Krisna</h2>
                  </div>
                </div>
              </div>
              <div className="w-[30rem] h-[14rem] bg-black/20 backdrop-blur-md py-6 px-8 rounded-lg">
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-col space-y-2">
                    <Image src={Assets.Star} alt="Image Star" />
                    <p className="text-sm text-justify text-white">
                      Amazing food. PERIOD. Service is always perfect, food is
                      always on point, and the staff is very friendly and
                      accommodating. Always looking forward to this place with
                      my friends, the fried vanilla ice cream is exceptionally
                      good
                    </p>
                  </div>
                  <div className="flex flex-row items-center space-x-4">
                    <span className="bg-[#232323] w-[3.5rem] h-[3.5rem] text-white font-light text-3xl justify-center flex items-center rounded-full">
                      S
                    </span>
                    <h2 className="text-lg text-white ">Sukma Krisna</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-screen px-4 bg-black">
          <div className="flex flex-col items-center w-full py-10 space-y-2">
            <h2 className="w-full text-3xl text-center text-white uppercase font-body">
              Contact us
            </h2>
            <p className="text-center text-white w-full md:w-[30%]">
              <span className="text-sm text-[#FFC945]">You can find me</span>
              in my studio if you want to take a look at my sculptures, address
              is via sacra 69, Toulouse, France.
            </p>
          </div>
          <div className="relative flex justify-between w-full max-w-6xl py-10 mx-auto overflow-hidden">
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-bold text-white uppercase">
                Visit us
              </span>
              <iframe
                width="500"
                height="250"
                src="https://maps.google.com/maps?q=Jl.%20Pasar%20Enjo%20RT.%20006/03%20No.15,%20RT.6/RW.3,%20Pisangan%20Tim.,%20Kec.%20Pulo%20Gadung,%20Kota%20Jakarta%20Timur,%20Daerah%20Khusus%20Ibukota%20Jakarta%2013230&t=&z=15&ie=UTF8&iwloc=&output=embed"
              ></iframe>
              <span className="text-white w-full md:w-[75%]">
                JL. Pasar Enjo RT. 006/03 No.15, RT.6/RW.3, Pisangan Tim., Kec.
                Pulo Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta
                13230
              </span>
            </div>
            <div className="w-full max-w-lg pt-5">
              <form action="" className="flex flex-col space-y-6">
                <div className="flex flex-col ">
                  <label className="text-white">Username</label>
                  <input
                    className="w-full h-10 bg-black outline-none border-b-[0.5px] border-b-gray-400 text-white px-2"
                    type="text"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-white">Email Address</label>
                  <input
                    className="w-full h-10 bg-black outline-none border-b-[0.5px] border-b-gray-400 tex"
                    type="text"
                  />
                </div>
                <div className="flex flex-col ">
                  <label className="text-white">Message</label>
                  <input
                    className=" w-full h-32 bg-black outline-none border-b-[0.5px] border-b-gray-400 text-white px-2"
                    type="text"
                  />
                </div>
                <div className="w-full items-center justify-center flex bg-[#deac2d] h-10 rounded-sm cursor-pointer hover:bg-[#f5cc64]">
                  <span className="px-2 py-4 font-semibold text-white">
                    Let's Talk!
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto bg-black h-[14rem]">
          <div className="flex items-center justify-between h-full max-w-6xl mx-auto">
            <div className="flex flex-col space-y-2">
              <div className="relative md:w-[3.5rem] w-[3.5rem] h-full flex justify-center items-center">
                <Image src={Assets.Djamboel} alt="Logo Djamboel" />
              </div>
              <span className="text-white font-bold">Djamboel Coffee</span>
              <p className="text-xs text-white w-full md:w-[40%]">
                Djamboel Coffee will provide a friendly, comfortable atmosphere
                where the customer can receive quality food, service and
                entertainment
              </p>
            </div>
            <div className="flex flex-col space-y-2 mt-16">
              <span className="text-white font-bold">Working Hours</span>
              <div className="flex flex-col ">
                <span className="text-white text-sm">
                  Mon - Fri 09:00 AM - 11.00 PM
                </span>
                <span className="text-white text-sm">
                  Sat - Sun 09:00 AM - 11.00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    </Fragment>
  );
}
