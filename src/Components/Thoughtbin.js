import React from "react";
import trash from "../Assets/trash-bin.png";
import cloud from "../Assets/cloud.png";
import qr from "../Assets/qr.png";

const Thoughtbin = () => {
  return (
    <>
      <div className="flex flex-row">
        {/* <img className=" h-screen w-[400px]" src={Rectangle}  /> */}

        <div className="bg-[#317B7B] w-[400px] h-[1000px]">
          <div className="absolute top-0">
            <img className="w-[300px]" src={cloud} />
          </div>
          <div className="absolute top-1 left-10 ">
            <img className="h-48" src={trash} />
          </div>
          <div className="mt-[404px] ">
          <nav className="flex flex-col justify-center items-center">
          <div className="absolute ">
            <a
              href="#"
              className=" font-['DM Sans'] text-white text-2xl not-italic leading-[57px] font-bold"
            >
              Home
            </a>
          </div>
          <div className="absolute pt-36">
            <a
              href="#"
              className=" font-['DM Sans'] text-white text-2xl not-italic leading-[57px] font-bold"
            >
              Team
            </a>
          </div>
          <div className="absolute pt-72">
            <a
              href="#"
              className=" font-['DM Sans'] text-white text-2xl not-italic leading-[57px] font-bold"
            >
              Contact Us
            </a>
          </div>
          </nav>
          </div>
        </div>
        <div className="bg-[#c1ebeb] h-[1000px] w-screen">
          <div className="text-center pt-[84px] px-40">
            <span className="font-salsa text-[48px] text-[#1A4654] font-semibold">
              Thoughts Bin
            </span>
            <p className="pt-10 leading-loose ">
              A place to calm your mind. A bin to share your thoughts both good
              and bad freely. It is a place that provides you with the
              fundamental right of expression. All we ask in return is that you
              respect others emotions.
            </p>
            <p className="pt-10 leading-loose ">
              {" "}
              Here what is said matters more than who said. A place where every
              one is equal, a human just expressing. We hope this platform
              provides you with opportunity to be heard when agry or happy. A
              place were people don't judge just read. There are no celebrities
              here only thoughts floating around.{" "}
            </p>
            <p className="pt-12 leading-loose ">"Words are a beautiful way to express,</p>
            <p className="leading-loose "> Thoughts are the soul of what's written,</p>
            <p className="leading-loose "> What is expressed trough writing is ones emotions,</p>
            <p className="leading-loose ">Sometimes strong sometimes harsh,</p>
            <p className="leading-loose "> Sometimes in love other times with a broken heart,</p>
            <p className="leading-loose "> Lets reduce the anger mend the broken heart and cherish happiness,</p>
            <p className="leading-loose "> As Sometimes some thoughts live beyond a simple human life"</p>
          </div>
          <div className="flex flex-col items-end pr-10 pt-12">
            <div className="pr-14">
            <img src={qr}/>
            </div>
            <div className="w-[280px] h-[72px] bg-[#12B7B7] mt-5 rounded-sm border-0 ">
            <button
              className=" text-[20px] text-center py-5 text-white font-bold leading-7 "> Get Started 
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Thoughtbin;
