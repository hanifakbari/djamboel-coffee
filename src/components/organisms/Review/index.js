import React from "react";
import { Assets } from "assets";
import Image from "next/image";

export const Review = () => {
  return (
    <div
      id="review"
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      <Image src={Assets.Review} alt="Image Review" width={1300} />
      <div className="absolute top-0 flex flex-col items-center w-full h-screen px-4 py-10 bg-gradient-to-b from-black via-black/50 to-black/90 justidy-center">
        <h2 className="w-full text-3xl text-center text-white uppercase font-body">
          Clients Review
        </h2>
        <div className="py-[4rem] flex justify-center flex-row space-x-6">
          <div className="w-[30rem] h-[14rem] bg-black/20 backdrop-blur-md py-6 px-8 rounded-lg">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <Image src={Assets.Star} alt="Image Star" />
                <p className="text-sm text-justify text-white">
                  Kopi di sini enak, makanannya enak, suasananya enak, staffnya
                  sangat baik. Serius, apa lagi yang bisa dipuji? Oh dan
                  suasananya bikin nyaman pokoknya. Caffe nya lumayan luas.
                  Sangat direkomendasikan untuk hang out dengan teman-teman.
                </p>
              </div>
              <div className="flex flex-row items-center space-x-4">
                <span className="bg-[#2e2e2e] w-[3.5rem] h-[3.5rem] text-white font-light text-3xl justify-center flex items-center rounded-full">
                  A
                </span>
                <h2 className="text-lg text-white ">Adhi Bimantoro</h2>
              </div>
            </div>
          </div>
          <div className="w-[30rem] h-[14rem] bg-black/20 backdrop-blur-md py-6 px-8 rounded-lg ">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col space-y-2">
                <Image src={Assets.Star} alt="Image Star" />
                <p className="text-sm text-justify text-white">
                  Ini adalah kedai kopi favorit baru saya di Jakarta. Saya bisa
                  menyebutnya kedai kopi dengan pemandangan yang estetik karena
                  interior nya tertata apik di dalam kedai kopi yang luas ini.
                </p>
              </div>
              <div className="flex flex-row items-center pt-[1.2rem] space-x-4">
                <span className="bg-[#551c1c] w-[3.5rem] h-[3.5rem] text-white font-light text-3xl justify-center flex items-center rounded-full">
                  A
                </span>
                <h2 className="text-lg text-white ">Aufar Ramadhan</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30rem] h-[14rem] bg-black/20 backdrop-blur-md py-6 px-8 rounded-lg ">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col space-y-2">
              <Image src={Assets.Star} alt="Image Star" />
              <p className="text-sm text-justify text-white">
                Kopi nya enak, harga nyaman dikantong, barista nya ramah asik
                friendly.. circle yg sering nongkrong ngopi disini juga oke
                semua, semoga makin rame dan maju terus
              </p>
            </div>
            <div className="flex flex-row items-center pt-[1.2rem] space-x-4">
              <span className="bg-[#ef9a9a] w-[3.5rem] h-[3.5rem] text-white font-light text-3xl justify-center flex items-center rounded-full">
                R
              </span>
              <h2 className="text-lg text-white ">Rania Fitri</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
