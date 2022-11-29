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
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black to-black/50">
            <Menu />
            <Team />
          </div>
        </div>
      </>
    </Fragment>
  );
}
