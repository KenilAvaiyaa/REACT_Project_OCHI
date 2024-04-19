"use client";
import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="0.05" className=" w-full py-32 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl overflow-hidden">
      <div className="text  border-t-2 border-b-2 flex whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className=" uppercase text-[20vw] text-[#f1f1f1] leading-none font-[head] pr-5 -mb-[0.5vw] pt-2 "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className=" uppercase text-[20vw] text-[#f1f1f1] leading-none font-[head] pr-5 -mb-[0.5vw] pt-2 "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className=" uppercase text-[20vw] text-[#f1f1f1] leading-none font-[head] pr-5 -mb-[0.5vw] pt-2 "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
