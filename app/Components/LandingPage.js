import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="-0.7" className="w-full h-screen bg-body pt-1">
      <div className="info font-['head'] mt-32 px-10 ">
        <div className="masker">
          <h1 className=" uppercase leading-[6.5vw] text-[8.8vw]">we create</h1>
        </div>
        <div className="masker w-fit flex justify-start items-center gap-1">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "9vw" }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
            className="w-[9vw] h-[5.2vw] mt-[12px] bg-green-500 bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover bg-center  rounded-md"
          ></motion.div>
          <h1 className=" uppercase leading-[6.5vw] text-[8.8vw]">
            eye-opening
          </h1>
        </div>
        <div className="masker">
          <h1 className=" uppercase leading-[6.5vw] text-[8.8vw]">
            PRESENTATIONS
          </h1>
        </div>
      </div>
      <div className=" relative border-t-[1px] border-main mt-56">
        <div className="text flex text-base font-['nev'] mx-10 justify-between items-center mt-2">
          <h4 className="">For public and private companies</h4>
          <h4 className="">From the first pitch to IPO</h4>
          <div className="start flex gap-2">
            <h4 className=" uppercase px-4 py-2 border-[1px] font-[300] text-sm border-main rounded-full">
              start the project
            </h4>
            <div className=" w-10 h-10 rounded-full border-[1px] flex justify-center items-center ">
              <GoArrowUpRight />
            </div>
          </div>
        </div>
        <div className="scrollD absolute left-[47%] mt-14 tracking-tight text-gray-500">
          {/* /* 40 to 20 */}
          Scroll down
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
