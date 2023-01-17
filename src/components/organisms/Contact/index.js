import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  function SubmitHandler(data) {
    console.log(data);

    fetch("/api/sheet", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire("Success!", "You clicked the button!", "success");
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  }
  return (
    <div className="relative w-full h-screen px-4 bg-black">
      <div className="flex flex-col items-center w-full py-10 space-y-2">
        <h2 className="w-full text-3xl text-center text-white uppercase font-body">
          Contact us
        </h2>
        <p className="text-center text-white w-full md:w-[30%]">
          <span className="text-sm text-[#FFC945]">You can find me</span>
          in my studio if you want to take a look at my sculptures, address is
          via sacra 69, Toulouse, France.
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
            JL. Pasar Enjo RT. 006/03 No.15, RT.6/RW.3, Pisangan Tim., Kec. Pulo
            Gadung, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13230
          </span>
        </div>
        <div className="w-full max-w-lg pt-5">
          <form
            onSubmit={handleSubmit(SubmitHandler)}
            autoComplete="off"
            className="flex flex-col space-y-6"
          >
            <div className="flex flex-col ">
              <label htmlFor="name" className="text-white">
                Username
              </label>
              <input
                className="w-full h-10 bg-black outline-none border-b-[0.5px] border-b-gray-400 text-white px-2"
                type="text"
                name="name"
                id="name"
                {...register("Name", { required: "Please enter the Name" })}
              />
              <span className="mt-1 text-sm font-light text-red-500">
                {errors.Name && errors.Name.message}
              </span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                className="w-full h-10 bg-black outline-none border-b-[0.5px] border-b-gray-400 text-white px-2"
                type="email"
                name="email"
                id="email"
                {...register("Email", { required: "Please enter your Email" })}
              />
              <span className="mt-1 text-sm font-light text-red-500">
                {errors.Email && errors.Email.message}
              </span>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="message" className="text-white">
                Message
              </label>
              <textarea
                className=" w-full h-32 bg-black outline-none border-b-[0.5px] border-b-gray-400 text-white p-2"
                type="message"
                name="message"
                id="message"
                {...register("Message", { required: "Enter your feedback" })}
              />
              <span className="mt-1 text-sm font-light text-red-500">
                {errors.Message && errors.Message.message}
              </span>
            </div>
            <div className="w-full items-center justify-center flex bg-[#deac2d] h-10 rounded-sm cursor-pointer hover:bg-[#f5cc64]">
              <button
                type="submit"
                className="flex items-center justify-center w-full h-full font-semibold text-white"
              >
                Let's Talk!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
