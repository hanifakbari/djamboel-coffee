import { Hero, About, Menu, Team, Gallery, Review, Contact } from "components";
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
        <Gallery />
        <Review />
        <Contact />
        <div className="w-full mx-auto bg-black h-[14rem]">
          <div className="flex items-center justify-between h-full max-w-6xl mx-auto">
            <div className="flex flex-col space-y-2">
              <div className="relative md:w-[3.5rem] w-[3.5rem] h-full flex justify-center items-center">
                <Image src={Assets.Djamboel} alt="Logo Djamboel" />
              </div>
              <span className="font-bold text-white">Djamboel Coffee</span>
              <p className="text-xs text-white w-full md:w-[40%]">
                Djamboel Coffee will provide a friendly, comfortable atmosphere
                where the customer can receive quality food, service and
                entertainment
              </p>
            </div>
            <div className="flex flex-col mt-16 space-y-2">
              <span className="font-bold text-white">Working Hours</span>
              <div className="flex flex-col ">
                <span className="text-sm text-white">
                  Mon - Fri 09:00 AM - 11.00 PM
                </span>
                <span className="text-sm text-white">
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
