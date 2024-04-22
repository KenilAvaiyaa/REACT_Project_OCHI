"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

const Projects = () => {
  const card = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const Hover = (index) => {
    card[index].start({ y: "0" });
  };

  const Endhover = (index) => {
    card[index].start({ y: "100%" });
  };

  return (
    <div data-scroll data-scroll-speed="0.05" className=" w-full relative py-10 rounded-tl-3xl rounded-tr-3xl">
      <div className=" w-full mt-2 sm:mt-8 border-b-[1px] pb-5 sm:pb-10 border-zinc-400  px-10">
        <h1 className=" text-[27px] sm:text-6xl font-['nev'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="projectinfo w-full flex flex-col ">
        <div className="cards w-full mt-8 flex flex-col gap-4 sm:gap-0 sm:flex-row">
          <div className="card w-full sm:w-1/2 px-10 min-h-[40vh] sm:min-h-[80vh]">
            <div className="cardtext w-full h-[5vh] py-3  flex justify-start items-center gap-3">
              <div className="dote w-3 h-3 bg-black rounded-full"></div>
              <h4 className=" font-['nev'] text-sm uppercase">FYDE</h4>
            </div>
            <motion.div
              onHoverStart={() => Hover(0)}
              onHoverEnd={() => Endhover(0)}
              className="cardimgcont  w-full h-[30vh] sm:h-[70vh] relative rounded-2xl "
            >
              <h1 className="text uppercase absolute flex overflow-hidden left-full -translate-x-[35%] top-1/2  -translate-y-1/2 z-[999] text-[#CDEA67]  font-['head'] text-9xl">
                {/* <h1 className=" uppercase absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[999] text-[#CDEA67] font-['head'] text-9xl"> */}
                {/* fyde */}
                {"fyde".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={card[0]}
                    transition={{
                      ease: [0.76, 0, 0.24, 1],
                      delay: index * 0.05,
                    }}
                    className=" inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <div className="cardimge w-full h-full rounded-2xl overflow-hidden hover:scale-90 ease-in duration-300 ">
                <img
                  className="w-full h-full bg-center bg-cover hover:scale-110 ease-in duration-500 "
                  src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                  alt="fyde"
                />
              </div>
            </motion.div>
            <div className="cardinfo min-h-[5vh] py-2 flex justify-start items-center uppercase gap-3 flex-wrap">
              <h4 className="w-fit px-2 py-1 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                audit
              </h4>
              <h4 className="w-fit px-2 py-1 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                copywriting
              </h4>
              <h4 className="w-fit px-2 py-1 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                sales deck
              </h4>
              <h4 className="w-fit px-2 py-1 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                slides designs
              </h4>
            </div>
          </div>
          <div className="card w-full sm:w-1/2 px-10 min-h-[40vh] sm:min-h-[80vh]">
            <div className="cardtext w-full h-[5vh] py-3 flex justify-start items-center gap-3">
              <div className="dote w-3 h-3 bg-black rounded-full"></div>
              <h4 className=" font-['nev'] text-sm uppercase">vise</h4>
            </div>
            <motion.div
              onHoverStart={() => Hover(1)}
              onHoverEnd={() => Endhover(1)}
              className="cardimgcont  w-full h-[30vh] sm:h-[70vh] relative rounded-2xl "
            >
              <h1 className=" uppercase absolute flex overflow-hidden right-full translate-x-[25%] top-1/2 -translate-y-1/2 z-[999] text-[#CDEA67]  font-['head'] text-9xl">
                {/* <h1 className=" uppercase absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[999] hidden text-[#CDEA67] font-['head'] text-9xl"> */}
                {/* fyde */}
                {"vise".split("").map((item, index) => (
                  <motion.span
                  initial={{ y: "100%" }}
                  animate={card[1]}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    delay: index * 0.05,
                  }}
                  className=" inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
                ))}
              </h1>
              <div className="cardimge w-full h-full rounded-2xl overflow-hidden hover:scale-90 ease-in duration-300">
                <img
                  className="w-full h-full bg-center bg-cover hover:scale-110 ease-in duration-500"
                  src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                  alt="fyde"
                />
              </div>
            </motion.div>
            <div className="cardinfo min-h-[5vh] py-2 flex justify-start items-center uppercase gap-3 flex-wrap">
              <h4 className="w-fit px-2 py-1 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                agency
              </h4>
              <h4 className="w-fit px-2 py-1 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                company presentation
              </h4>
            </div>
          </div>
        </div>
        <div className="cards w-full mt-8 flex flex-col gap-4 sm:gap-0 sm:flex-row">
          <div className="card w-full sm:w-1/2 px-10 min-h-[40] sm:min-h-[80vh]">
            <div className="cardtext w-full h-[5vh] py-3  flex justify-start items-center gap-3">
              <div className="dote w-3 h-3 bg-black rounded-full"></div>
              <h4 className=" font-['nev'] text-sm uppercase">trawa</h4>
            </div>
            <motion.div
              onHoverStart={() => Hover(2)}
              onHoverEnd={() => Endhover(2)}
              className="cardimgcont  w-full h-[30vh] sm:h-[70vh] relative rounded-2xl "
            >
              <h1 className=" uppercase absolute flex overflow-hidden left-full -translate-x-[35%] top-1/2 -translate-y-1/2  z-[999] text-[#CDEA67]  font-['head'] text-9xl">
                {/* <h1 className=" uppercase absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[999] text-[#CDEA67] font-['head'] text-9xl"> */}
                {/* fyde */}
                {"trawa".split("").map((item, index) => (
                  <motion.span
                  initial={{ y: "100%" }}
                  animate={card[2]}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    delay: index * 0.05,
                  }}
                  className=" inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
                ))}
              </h1>
              <div className="cardimge w-full h-full rounded-2xl overflow-hidden hover:scale-90 ease-in duration-300 ">
                <img
                  className="w-full h-full bg-center bg-cover hover:scale-110 ease-in duration-500 "
                  src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
                  alt="fyde"
                />
              </div>
            </motion.div>
            <div className="cardinfo min-h-[5vh] py-2 flex justify-start items-center uppercase gap-3 flex-wrap">
              <h4 className="w-fit px-2 py-1 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                audit
              </h4>
              <h4 className="w-fit px-2 py-1 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                copywriting
              </h4>
              <h4 className="w-fit px-2 py-1 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                sales deck
              </h4>
              <h4 className="w-fit px-2 py-1 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                slides designs
              </h4>
            </div>
          </div>
          <div className="card w-full sm:w-1/2 px-10 min-h-[40vh] sm:min-h-[80vh]">
            <div className="cardtext w-full h-[5vh] py-3 flex justify-start items-center gap-3">
              <div className="dote w-3 h-3 bg-black rounded-full"></div>
              <h4 className=" font-['nev'] text-sm uppercase">PREMIUM BLEND</h4>
            </div>
            <motion.div
              onHoverStart={() => Hover(3)}
              onHoverEnd={() => Endhover(3)}
              className="cardimgcont  w-full h-[30vh] sm:h-[70vh] relative rounded-2xl "
            >
              <h1 className=" uppercase absolute flex overflow-hidden right-full translate-x-[45%] top-1/2 -translate-y-1/2 z-[999] whitespace-nowrap text-[#CDEA67] font-['head'] text-9xl">
                {/* fyde */}
                {"PREMIUM BLEND".split("").map((item, index) => (
                  <motion.span
                  initial={{ y: "100%" }}
                  animate={card[3]}
                  transition={{
                    ease: [0.76, 0, 0.24, 1],
                    delay: index * 0.05,
                  }}
                  className=" inline-block"
                  key={index}
                >
                  {item}
                </motion.span>
                ))}
              </h1>
              <div className="cardimge w-full h-full rounded-2xl overflow-hidden hover:scale-90 ease-in duration-300">
                <img
                  className="w-full h-full bg-center bg-cover hover:scale-110 ease-in duration-500"
                  src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
                  alt="fyde"
                />
              </div>
            </motion.div>
            <div className="cardinfo min-h-[5vh] py-2 flex justify-start items-center uppercase gap-3 flex-wrap">
              <h4 className="w-fit px-2 py-1 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                agency
              </h4>
              <h4 className="w-fit px-2 py-1 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                company presentation
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-20">
        <button className=" absolute flex gap-4 text-sm sm:text-base sm:gap-8 items-center px-5 py-2 sm:px-10  sm:py-4 bg-zinc-900 text-white sm:mt-5 rounded-full uppercase ">
          read more
          <div className=" w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white rounded-full"></div>
        </button>
      </div>
    </div>
  );
};

export default Projects;
