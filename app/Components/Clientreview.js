import React from "react";

const Clientreview = () => {
  return (
    <div  className=" w-full rounded-tl-3xl rounded-tr-3xl ">
      <div className=" w-full mt-4 sm:mt-16 border-b-[1px] pb-5 sm:pb-10 border-zinc-400  px-10">
        <h1 className="text-[27px] sm:text-6xl font-[100] font-['nev'] tracking-tight">
          Clients’ reviews
        </h1>
      </div>

      <div className="clereview w-full flex flex-col">
        <div className="clentdeck w-full  px-10 py-5 border-b-[1px] border-zinc-400 flex flex-col sm:flex-row">
          <div className="cname w-full mb-3 sm:mb-0 sm:w-1/4 ">
            <h4 className=" font-['nev']">Karman Ventures</h4>
          </div>
          <div className="cservice w-full mb-3 sm:mb-0 sm:w-1/4  flex flex-col">
            <h4 className="font-['nev'] mb-8 sm:mb-0 ">Services:</h4>
            <h4 className="w-fit px-2 py-1  sm:mt-16 uppercase mb-2 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
              investore deck
            </h4>
            <h4 className="w-fit px-2 py-1 uppercase sm:mb-2 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
              sales deck
            </h4>
          </div>
          <div className="cinfo w-full sm:w-2/4 flex flex-col sm:flex-row">
            <div className="clentname w-full sm:w-4/6 ">
              <h4 className=" font-['nev']  mb-4 sm:mb-0 ">William Barnes</h4>
              <div className="clientimage w-24 h-24 rounded-lg mb-4  sm:mb-5 sm:mt-14 overflow-hidden">
                <img
                  className=" w-full h-full bg-cover bg-center"
                  src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                  alt="client"
                />
              </div>
              <p className="font-['nev'] mb-4 sm:mb-0 ">
                They were transparent about the time and the stages of the
                project. The end product is high quality, and I feel confident
                about how they were handholding the client through the process.
                I feel like I can introduce them to someone who needs to put a
                sales deck together from scratch, and they would be able to
                handhold the client experience from 0 to 100 very effectively
                from story to design. 5/5
              </p>
            </div>
            <div className="w-full mb-4 sm:mb-0 sm:w-1/6 ">
              <h4 className=" font-['nev'] text-start sm:text-end  text-sm uppercase ">
                Read
              </h4>
            </div>
          </div>
        </div>

        <div className="clentdeck w-full  px-10 py-2 sm:py-5 border-b-[1px] border-zinc-400 flex">
          <div className="cname w-1/2 sm:w-1/4 ">
            <h4 className=" font-['nev']">Premium Blend</h4>
          </div>
          <div className="cservice w-1/4  flex flex-col">
            <h4 className="font-['nev'] hidden">Services:</h4>
            {/* <h4 className="w-fit px-2 py-1 mt-16 uppercase mb-2 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                investore deck
                </h4>
                <h4 className="w-fit px-2 py-1 uppercase mb-2 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                sales deck
                </h4> */}
          </div>
          <div className="cinfo sm:w-2/4 flex">
            <div className="clentname w-4/6 ">
              <h4 className=" font-['nev'] hidden sm:block ">Ellen Kim</h4>
              {/* <div className="clientimage w-24 h-24 rounded-lg mb-5 mt-14 overflow-hidden">
                    <img className=' w-full h-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="client" />
                </div>
                <p className="font-['nev'] ">They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p> */}
            </div>
            <div className="w-1/6 ">
              <h4 className=" font-['nev'] text-end text-sm uppercase">Read</h4>
            </div>
          </div>
        </div>

        <div className="clentdeck w-full  px-10 py-2 sm:py-5 border-b-[1px] border-zinc-400 flex">
          <div className="cname w-1/2 sm:w-1/4  ">
            <h4 className=" font-['nev']">Hypercare Systems</h4>
          </div>
          <div className="cservice w-1/4  flex flex-col">
            <h4 className="font-['nev'] hidden">Services:</h4>
            {/* <h4 className="w-fit px-2 py-1 mt-16 uppercase mb-2 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                investore deck
                </h4>
                <h4 className="w-fit px-2 py-1 uppercase mb-2 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                sales deck
                </h4> */}
          </div>
          <div className="cinfo sm:w-2/4 flex">
            <div className="clentname w-4/6 ">
              <h4 className=" font-['nev'] hidden sm:block ">Brendan Goss</h4>
              {/* <div className="clientimage w-24 h-24 rounded-lg mb-5 mt-14 overflow-hidden">
                    <img className=' w-full h-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="client" />
                </div>
                <p className="font-['nev'] ">They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p> */}
            </div>
            <div className="w-1/6 ">
              <h4 className=" font-['nev'] text-end text-sm uppercase">Read</h4>
            </div>
          </div>
        </div>

        <div className="clentdeck w-full  px-10 py-2 sm:py-5 border-b-[1px] border-zinc-400 flex">
          <div className="cname w-1/2 sm:w-1/4  ">
            <h4 className=" font-['nev']" >Officevibe</h4>
          </div>
          <div className="cservice w-1/4  flex flex-col">
            <h4 className="font-['nev'] hidden">Services:</h4>
            {/* <h4 className="w-fit px-2 py-1 mt-16 uppercase mb-2 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                investore deck
                </h4>
                <h4 className="w-fit px-2 py-1 uppercase mb-2 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                sales deck
                </h4> */}
          </div>
          <div className="cinfo sm:w-2/4 flex">
            <div className="clentname w-4/6 ">
              <h4 className=" font-['nev'] hidden sm:block">Raff Labrie</h4>
              {/* <div className="clientimage w-24 h-24 rounded-lg mb-5 mt-14 overflow-hidden">
                    <img className=' w-full h-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="client" />
                </div>
                <p className="font-['nev'] ">They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p> */}
            </div>
            <div className="w-1/6 ">
              <h4 className=" font-['nev'] text-end text-sm uppercase">Read</h4>
            </div>
          </div>
        </div>

        <div className="clentdeck w-full  px-10 py-2 sm:py-5 border-b-[1px] border-zinc-400 flex">
          <div className="cname w-1/2 sm:w-1/4  ">
            <h4 className=" font-['nev']">Orderlion</h4>
          </div>
          <div className="cservice w-1/4  flex flex-col">
            <h4 className="font-['nev'] hidden">Services:</h4>
            {/* <h4 className="w-fit px-2 py-1 mt-16 uppercase mb-2 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                investore deck
                </h4>
                <h4 className="w-fit px-2 py-1 uppercase mb-2 border-[1px] border-black rounded-[50px] text-sm font-['nev']">
                sales deck
                </h4> */}
          </div>
          <div className="cinfo sm:w-2/4 flex">
            <div className="clentname w-4/6 ">
              <h4 className=" font-['nev'] hidden sm:block">Stefan Strohmer</h4>
              {/* <div className="clientimage w-24 h-24 rounded-lg mb-5 mt-14 overflow-hidden">
                    <img className=' w-full h-full bg-cover bg-center' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="client" />
                </div>
                <p className="font-['nev'] ">They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</p> */}
            </div>
            <div className="w-1/6 ">
              <h4 className=" font-['nev'] text-end text-sm uppercase">Read</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="ochitag relative w-full h-[150vh] sm:h-[100vh]">
        <div className="ochiinfo absolute top-10 sm:top-[20%] w-full sm:h-[45vh] px-10 flex flex-col sm:flex-row gap-3">
          <div className=" w-full h-[45vh] sm:w-2/4 relative rounded-lg bg-[#004D43]  overflow-hidden ">
            <img
              className="w-[25vh] sm:w-[13vw] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="ochi"
            />
            <h4 className="w-fit absolute bottom-1 text-[#CDEA67] left-4 px-2 py-1 mt-16 uppercase mb-2 border-[1px] border-[#CDEA67] rounded-[50px] text-sm font-['nev']">
              ©2019–2022
            </h4>
          </div>
          <div className="w-full h-[45vh] sm:w-1/4 rounded-lg relative bg-[#212121] overflow-hidden ">
            <img
              className="w-[25vh] sm:w-[8vw] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt="ochi"
            />
            <h4 className="w-fit absolute bottom-1 text-white left-4 px-2 py-1 mt-16 uppercase mb-2 border-[1px] border-white rounded-[50px] text-sm font-['nev']">
              rating 5.0 on clutch
            </h4>
          </div>
          <div className="w-full h-[45vh] sm:w-1/4 rounded-lg relative bg-[#212121] overflow-hidden ">
            <img
              className="w-[15vh] sm:w-[8vw] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] "
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt="ochi"
            />
            <h4 className="w-fit absolute bottom-1 text-white left-4 px-2 py-1 mt-16 uppercase mb-2 border-[1px] border-white rounded-[50px] text-sm font-['nev']">
              business bootcamp alumni
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientreview;
