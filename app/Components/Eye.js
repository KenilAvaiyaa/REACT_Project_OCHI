"use client";
import React, { useEffect, useState } from "react";

const Eye = () => {
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
    <div className="eyes w-full h-screen overflow-hidden rounded-tl-3xl rounded-tr-3xl">
      <div data-scroll data-scroll-section data-scroll-speed="-0.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className=" absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className=" w-[14vw] flex justify-center items-center h-[14vw] bg-gray-200 rounded-full">
            <div className=" relative w-3/4 h-3/4 bg-[#1d1d1d] rounded-full">
              <div className="playte uppercase font-['nev'] text-center text-white text-sm absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] line w-full">
                play
              </div>
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${alg}deg)` }}
                className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] line w-[95%]"
              >
                <div className=" w-5 h-5  bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className=" w-[14vw] flex justify-center items-center h-[14vw] bg-gray-200 rounded-full">
            <div className=" relative w-3/4 h-3/4 bg-[#1d1d1d] rounded-full">
              <div className="playte uppercase font-['nev'] text-center text-white text-sm absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] line w-full">
                play
              </div>
              <div
                style={{ transform: `translate(-50%,-50%) rotate(${alg}deg)` }}
                className=" absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] line w-[95%]"
              >
                <div className=" w-5 h-5  bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eye;
