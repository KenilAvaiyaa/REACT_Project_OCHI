import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-.2" className=" w-full bg-[#CDEA67] py-14 sm:py-20 rounded-3xl ">
      <div className=" text-[27px] leading-[1.7rem] sm:text-6xl sm:leading-[3.755rem] pl-10 pr-[10vw] font-[nev]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to <a className="" href="">raise funds,</a>
        sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </div>
      
      <div className=" w-full border-t mt-10 sm:mt-14 px-10 py-5 border-[#a3b26e]">
        <div className=" w-full expect flex flex-col sm:flex-row">
          <h1 className=" w-full sm:w-1/2 font-[nev] font-[200] text-base sm:text-lg">
            What you can expect:
          </h1>
          <div className=" w-full mt-[24px] sm:w-1/2 sm:mt-0 info flex flex-col sm:flex-row justify-between ">
            <div className="left w-full sm:w-1/2 flex flex-col pr-5 sm:pr-0 mr-5 justify-between gap-6 items-center">
              <h1 className=" font-[nev] font-[200] text-base  sm:text-lg">
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it’s live or digital,
                delivered for one or a hundred people.
              </h1>
              <h1 className=" font-[nev] font-[200] text-base sm:text-lg">
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </h1>
            </div>
            <div className="right w-full sm:w-1/2 flex flex-col sm:ml-9 mt-[24px] sm:mt-16 justify-between gap-6 items-start sm:items-center ">
              <h1 className=" flex flex-col font-[nev] font-[200] text-base sm:text-lg">
                <h1 className=" w-full sm:w-1/2 font-[nev] font-[200] text-base sm:text-lg mb-2 sm:mb-4">
                  S:
                </h1>
                <a className="relative w-fit group" href="#">Instagram
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 rounded-full bg-black duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                
                <a className="relative w-fit group" href="#">Behance
                <span className="absolute bottom-0 left-0 h-[1px] w-0 rounded-full bg-black duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a className="relative w-fit group" href="#">Facebook
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 rounded-full bg-black duration-300 ease-in-out group-hover:w-full"></span>
                </a>
                <a className="relative w-fit group" href="#">Linkedin
                  <span className="absolute bottom-0 left-0 h-[1px] w-0 rounded-full bg-black duration-300 ease-in-out group-hover:w-full"></span>
                </a>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex flex-col sm:flex-row gap-10 border-t-2 mt-16 sm:mt-24 pt-5 border-[#a3b26e]">
        <div className=" w-full sm:w-1/2 pl-10">
          <h1 className="font-[nev] font-[200] text-3xl sm:text-6xl">Our approach:</h1>
          <button className="flex gap-4 sm:gap-8 items-center px-5 py-2 sm:px-10 sm:py-4 text-xs sm:text-lg bg-zinc-900 text-white mt-5 rounded-full uppercase ">
            read more
            <div className=" w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="heroimg w-fit h-[40vh] sm:w-1/2 sm:h-[35vw] mx-5 sm:mx-0 sm:ml-[15vw] bg-green-500 rounded-3xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
            alt="hero"
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
