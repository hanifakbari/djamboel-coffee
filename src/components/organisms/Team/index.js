import { Assets } from "assets";
import Image from "next/image";

export const Team = () => {
  return (
    <div className="max-w-6xl px-4 py-5 mx-auto">
      <h2 className="w-full text-3xl text-center text-white uppercase font-body">
        Our Team
      </h2>
      <div className="flex flex-col space-y-[4rem] py-[5rem]">
        <div className="flex flex-row items-center justify-center space-x-14">
          <div className="relative">
            <div className="relative md:w-[17rem] h-full flex flex-col space-y-6">
              <Image src={Assets.CEO} alt="Chief Executive Officer" />
            </div>
            <div className="w-[17rem] h-[5rem] bg-white/[10%] backdrop-blur-sm flex-col flex space-y-1 py-3 rounded-b-2xl">
              <h2 className="text-base tracking-wide text-center text-[#FFC945] font-bold">
                Muhammad Daffa
              </h2>
              <span className="text-lg font-light text-center text-white">
                Chief Executive Officer
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="relative md:w-[17rem] h-full flex flex-col space-y-6">
              <Image src={Assets.CEO} alt="Chief Executive Officer" />
            </div>
            <div className="w-[17rem] h-[5rem] bg-white/[10%] backdrop-blur-sm flex-col flex space-y-1 py-3 rounded-b-2xl">
              <h2 className="text-base tracking-wide text-center text-[#FFC945] font-bold">
                Muhammad Daffa
              </h2>
              <span className="text-lg font-light text-center text-white">
                Chief Executive Officer
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="relative md:w-[17rem] h-full flex flex-col space-y-6">
              <Image src={Assets.CEO} alt="Chief Executive Officer" />
            </div>
            <div className="w-[17rem] h-[5rem] bg-white/[10%] backdrop-blur-sm flex-col flex space-y-1 py-3 rounded-b-2xl">
              <h2 className="text-base tracking-wide text-center text-[#FFC945] font-bold">
                Muhammad Daffa
              </h2>
              <span className="text-lg font-light text-center text-white">
                Chief Executive Officer
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
