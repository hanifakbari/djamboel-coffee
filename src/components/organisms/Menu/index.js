import { Assets } from "assets";
import Image from "next/image";

export const Menu = () => {
  return (
    <div id="menu" className="max-w-6xl px-4 py-5 mx-auto transition">
      <h2 className="w-full text-3xl text-center text-white uppercase font-body">
        Our Menu
      </h2>
      <div className="flex flex-col space-y-[4rem] py-[5rem]">
        <div className="flex flex-row items-center justify-center space-x-14">
          <div className="relative md:w-[17rem] h-full flex flex-col space-y-6">
            <Image src={Assets.Espresso} alt="Espresso" />
            <h2 className="text-base tracking-wide text-center text-white">
              Espresso
            </h2>
          </div>
          <div className="relative top-[2rem]">
            <div className="relative md:w-[17rem] h-full flex flex-col space-y-6">
              <Image src={Assets.KopiOri} alt="Kopi Susu Ori" />
            </div>
            <div className="w-[16.75rem] h-[8.5rem] bg-white/10 flex-col flex space-y-2 p-4 rounded-b-2xl">
              <h2 className="text-base tracking-wide text-center text-[#FFC945] font-bold">
                Kopi Susu Ori
              </h2>
              <p className="w-full text-xs text-justify text-white">
                This creamy coffee drink is usually consumed at breakfast time
                in Italy and is loved in the United States as well.
              </p>
              <span className="text-sm font-semibold text-center text-white">
                25.000
              </span>
            </div>
          </div>
          <div className="relative md:w-[18rem] h-full flex flex-col space-y-6">
            <Image src={Assets.Berry} alt="Berry Milk" />
            <h2 className="text-base tracking-wide text-center text-white">
              Berry Milk
            </h2>
          </div>
          <div className="relative md:w-[17rem] h-full flex flex-col space-y-6">
            <Image src={Assets.Americano} alt="Americano" />
            <h2 className="text-base tracking-wide text-center text-white">
              Americano
            </h2>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center max-w-6xl mx-auto space-x-14">
          <div className="relative md:w-[17rem] h-full flex flex-col space-y-6">
            <Image src={Assets.BerryCitrus} alt="Berry Citrus" />
            <h2 className="text-base tracking-wide text-center text-white">
              Berry Citrus
            </h2>
          </div>
          <div className="relative md:w-[18rem] h-full flex flex-col space-y-6">
            <Image src={Assets.KopiRegal} alt="Kopi Susu Regal" />
            <h2 className="text-base tracking-wide text-center text-white">
              Kopi Susu Regal
            </h2>
          </div>
          <div className="relative top-[2rem]">
            <div className="relative md:w-[17rem] h-full flex flex-col space-y-6">
              <Image src={Assets.Raspberry} alt="Raspberry Milk" />
            </div>
            <div className="w-[16.75rem] h-[8.5rem] bg-black/20 flex-col flex space-y-2 p-4 rounded-b-2xl">
              <h2 className="text-base tracking-wide text-center text-[#FFC945] font-bold">
                Raspberry Lime
              </h2>
              <p className="w-full text-xs text-justify text-white">
                This creamy coffee drink is usually consumed at breakfast time
                in Italy and is loved in the United States as well.
              </p>
              <span className="text-sm font-semibold text-center text-white">
                25.000
              </span>
            </div>
          </div>
          <div className="relative md:w-[17rem] h-full flex flex-col space-y-6">
            <Image src={Assets.KopiAren} alt="Kopi Susu Aren" />
            <h2 className="text-base tracking-wide text-center text-white">
              Kopi Susu Aren
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
