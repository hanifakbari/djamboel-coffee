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
                    <span className="bg-[#232323] w-[3.5rem] h-[3.5rem] text-white font-light text-3xl justify-center flex items-center rounded-full">
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
        <div className="w-full h-screen bg-black"></div>
      </>
    </Fragment>
  );
}
