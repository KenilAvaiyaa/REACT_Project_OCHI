"use client";
import React, { useEffect, useState } from "react";

const Startproject = () => {
  const [alg, setAlg] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;

      let diffx = mousex - window.innerWidth / 2;
      let diffy = mousey - window.innerHeight / 2;

      let deg = Math.atan2(diffy, diffx) * (180 / Math.PI);
      setAlg(deg - 180);
    });
  });
  return (
    <div data-scroll data-scroll-seaction data-scroll-speed="0.05" className=" relative w-full min-h-screen flex flex-col px-10 py-28 bg-[#CDEA67] rounded-tl-3xl rounded-tr-3xl">
      <div className="eyes w-full h-full ">
        <div className=" absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className=" w-[10vw] flex justify-center items-center h-[10vw] bg-gray-200 rounded-full">
            <div className=" relative w-3/4 h-3/4 bg-[#1d1d1d] rounded-full">
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${alg}deg)` }}
                className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] line w-[95%]"
              >
                <div className=" w-3.5 h-3.5  bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className=" w-[10vw] flex justify-center items-center h-[10vw] bg-gray-200 rounded-full">
            <div className=" relative w-3/4 h-3/4 bg-[#1d1d1d] rounded-full">
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${alg}deg)` }}
                className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] line w-[95%]"
              >
                <div className=" w-3.5 h-3.5  bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" uppercase text-[15vw] leading-[12VW] text-center font-['head']">
        ready
      </h1>
      <h1 className=" uppercase text-[15vw] leading-[12VW] text-center font-['head']">
        to start
      </h1>
      <h1 className=" uppercase text-[15vw] leading-[12VW] text-center font-['head']">
        THE PROJECT?
      </h1>
      <div className="w-full flex flex-col mt-5 justify-center items-center">
        <button className=" flex text-xs gap-8 items-center px-10 py-4 bg-zinc-900 text-white mt-5 rounded-full uppercase ">
          Start the project
          <div className=" w-2 h-2 bg-white rounded-full"></div>
        </button>
        <h4 className=" font-['nev'] mt-5 uppercase text-lg">or</h4>
        <button className=" flex gap-8 text-xs items-center px-10 py-4 bg-transparent border border-black text-black mt-5 rounded-full uppercase ">
          hello@ochi.design
          <div className=" w-2 h-2 bg-black rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default Startproject;
