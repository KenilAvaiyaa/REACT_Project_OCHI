import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="-0.7" className="w-full h-screen bg-body pt-1">
      <div className="info font-['head'] text-[#212121] mt-32 px-10 ">
        <div className="masker">
          <h1 className=" uppercase text-[16vw] leading-[12vw] sm:leading-[6.5vw] sm:text-[8.8vw]">we create</h1>
        </div>
        <div className="masker w-fit flex justify-start items-center gap-1">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "13vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className=" w-[16vw] h-[10vw] mt-[7px] sm:w-[9vw] sm:h-[6vw] sm:mt-[12px] bg-green-500 bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center  rounded-md"
          ></motion.div>
          <h1 className=" uppercase text-[16vw] leading-[12vw] sm:leading-[6.5vw] sm:text-[8.8vw]">
            eye-opening
          </h1>
        </div>
        <div className="masker">
          <h1 className=" uppercase text-[16vw] leading-[12vw] sm:leading-[6.5vw] sm:text-[8.8vw]">
            PRESENTATIONS
          </h1>
        </div>
      </div>
      <div className=" relative border-t-[1px] border-[#212121] sm:border-main mt-80 sm:mt-56">
        <div className="text text-base font-['nev'] mx-10 flex flex-col sm:flex-row items-start justify-between sm:items-center mt-2">
          <h4 className=" mt-5 sm:m-0">For public and private companies</h4>
          <h4 className="mt-5 sm:m-0">From the first pitch to IPO</h4>
          <div className="start mt-5 sm:m-0 flex gap-1">
            <h4 className=" textinbutton uppercase px-3 py-1  flex justify-center items-center border-zinc-700  sm:px-4 sm:py-2 border-[2px] font-[300] text-sm sm:border-[#e5e7eb] rounded-full">
              start the project
            </h4>
            <div className=" textinbutton hidden w-10 h-10 rounded-full border-[2px] sm:flex justify-center items-center ">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
        <motion.div
        initial={{ y: 0 , opacity:0}}
        animate={{ y: "100%",opacity:"100%" }}
        transition={{ ease: [0.76, 0, 0.24, 1], repeat: Infinity, duration: 1, delay:3 }} 
        className=" hidden sm:block scrollD absolute left-[47%] text-sm opacity-50 mt-14 tracking-tight text-gray-500">
          {/* /* 40 to 20 */}
          Scroll down
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
