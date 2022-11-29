import { Assets } from "assets";
import { Hero, About } from "components";
import React, { Fragment } from "react";
import Image from "next/image";
import { NextSeo } from "next-seo";

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
                url: "/public/assets/images/litedexConsultant.svg",
                width: 1200,
                height: 1200,
                alt: "seoLitedexConsultant",
                type: "image/jpg",
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
      </>
    </Fragment>
  );
}
