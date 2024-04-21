import React from "react";

const About = () => {
  return (
    <div data-scroll data-scroll-speed="-.2" className=" w-full bg-[#CDEA67] py-20 rounded-3xl ">
      <div className=" text-6xl leading-[3.755rem] pl-10 pr-[10vw] font-[nev]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to <a className="" href="">raise funds,</a>
        sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </div>
      
      <div className=" w-full border-t-2 mt-14 px-10 py-5 border-[#a3b26e]">
        <div className=" w-full expect flex ">
          <h1 className=" w-1/2 font-[nev] font-[200] text-lg">
            What you can expect:
          </h1>
          <div className=" w-1/2 info flex justify-between ">
            <div className="left w-1/2 flex  flex-col mr-5 justify-between gap-6 items-center">
              <h1 className=" font-[nev] font-[200] text-lg">
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it’s live or digital,
                delivered for one or a hundred people.
              </h1>
              <h1 className=" font-[nev] font-[200] text-lg">
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </h1>
            </div>
            <div className="right w-1/2 flex flex-col ml-9 mt-16 justify-between gap-6 items-center ">
              <h1 className=" flex flex-col font-[nev] font-[200] text-lg">
                <h1 className=" w-1/2 font-[nev] font-[200] text-lg mb-4">
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
      <div className=" w-full flex gap-10 border-t-2 mt-24 pt-5 border-[#a3b26e]">
        <div className=" w-1/2 pl-10">
          <h1 className="font-[nev] font-[200] text-6xl">Our approach:</h1>
          <button className="flex gap-8 items-center px-10 py-4 bg-zinc-900 text-white mt-5 rounded-full uppercase ">
            read more
            <div className=" w-2 h-2 bg-white rounded-full"></div>
          </button>
        </div>
        <div className="heroimg w-1/2 h-[35vw] ml-[15vw] bg-green-500 rounded-3xl overflow-hidden">
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
