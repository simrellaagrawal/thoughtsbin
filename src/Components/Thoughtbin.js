import React from "react";
import trash from "../Assets/trash-bin.png";
import cloud from "../Assets/cloud.png";
import qr from "../Assets/qr.png";

const Thoughtbin = () => {
  return (
    <>
      <div className="flex flex-row">
        <div className="bg-[#317B7B] mobileMd:w-[120px] mobileMd:h-screen tablet:w-[280px] laptopMd:h-[850px] laptopMd:w-[300px] desktopMd:w-[400px] desktopMd:h-[900px]">
          <div className="absolute top-0">
            <img className="mobileMd:w-[120px] tablet:w-[205px] laptopMd:w-[230px] desktopMd:w-[300px]" src={cloud} />
          </div>
          <div className="absolute top-1 desktopMd:left-10 mobileMd:left-3 laptopMd:left-4 ">
            <img className="mobileMd:h-20 tablet:h-[150px] laptopMd:h-[170px] desktopMd:h-48" src={trash} />
          </div>
          <div className="desktopMd:mt-[404px] mobileMd:mt-[150px] tablet:mt-[250px] laptopMd:mt-[300px]">
          <nav className="flex flex-col justify-center items-center mobileMd:pl-2">
          <div className="absolute ">
            <a
              href="#"
              className=" mobileMd:text-xs tablet:text-lg font-['DM Sans'] text-white desktopMd:text-2xl not-italic leading-[57px] font-bold"
            >Home</a>
          </div>
          <div className="absolute mobileMd:pt-14 tablet:pt-24 laptopMd:pt-[100px] desktopMd:pt-36">
            <a
              href="#"
              className="mobileMd:text-xs  tablet:text-lg font-['DM Sans'] text-white desktopMd:text-2xl not-italic leading-[57px] font-bold"
            >Team </a>
          </div>
          <div className="absolute mobileMd:pt-28 tablet:pt-52 desktopMd:pt-72">
            <a
              href="#"
              className="mobileMd:text-xs  tablet:text-lg font-['DM Sans'] text-white desktopMd:text-2xl not-italic leading-[57px] font-bold"
            >Contact Us</a>
          </div>
          </nav>
          </div>
        </div>
        <div className="bg-[#c1ebeb] desktopMd:h-[900px] w-screen mobileMd:h-screen laptopMd:h-[850px] ">
          <div className="mobileMd:px-4 mobileMd:pt-5 tablet:px-10 tablet:pt-16 laptopMd:px-28 text-center desktopMd:pt-[84px] desktopMd:px-40">
            <span className="mobileMd:text-xl tablet:text-3xl laptopMd:text-[44px] font-salsa desktopMd:text-[48px] text-[#1A4654] font-semibold">
              Thoughts Bin
            </span>
            <p className="font-['DM Sans']  mobileMd:pt-7 mobileMd:text-[9px] tablet:pt-8 tablet:text-[12px] laptopMd:pt-10 desktopMd:pt-12 desktopMd:leading-loose desktopMd:text-[14px]  ">
              A place to calm your mind. A bin to share your thoughts both good
              and bad freely. It is a place that provides you with the
              fundamental right of expression. All we ask in return is that you
              respect others emotions.
            </p>
            <p className="mobileMd:pt-2 desktopMd:pt-10 desktopMd:leading-loose mobileMd:text-[9px] tablet:pt-8 tablet:text-[12px] desktopMd:text-[14px]  ">
              {" "}
              Here what is said matters more than who said. A place where every
              one is equal, a human just expressing. We hope this platform
              provides you with opportunity to be heard when agry or happy. A
              place were people don't judge just read. There are no celebrities
              here only thoughts floating around.{" "}
            </p>
            <p className="mobileMd:pt-4 mobileMd:leading-4 desktopMd:pt-12 desktopMd:leading-loose mobileMd:text-[11px] tablet:pt-8 tablet:text-[12px] tablet:leading-7 desktopMd:text-[14px] ">"Words are a beautiful way to express,</p>
            <p className="desktopMd:leading-loose desktopMd:text-[14px]  mobileMd:leading-4 mobileMd:text-[9px]  tablet:text-[12px] tablet:leading-7 "> Thoughts are the soul of what's written,</p>
            <p className="desktopMd:leading-loose desktopMd:text-[14px]  mobileMd:leading-4 mobileMd:text-[9px]  tablet:text-[12px] tablet:leading-7"> What is expressed trough writing is ones emotions,</p>
            <p className="desktopMd:leading-loose desktopMd:text-[14px]  mobileMd:leading-4 mobileMd:text-[9px]  tablet:text-[12px] tablet:leading-7">Sometimes strong sometimes harsh,</p>
            <p className="desktopMd:leading-loose desktopMd:text-[14px]  mobileMd:leading-4 mobileMd:text-[9px]  tablet:text-[12px] tablet:leading-7"> Sometimes in love other times with a broken heart,</p>
            <p className="desktopMd:leading-loose desktopMd:text-[14px]  mobileMd:leading-4 mobileMd:text-[9px]  tablet:text-[12px] tablet:leading-7"> Lets reduce the anger mend the broken heart and cherish happiness,</p>
            <p className="desktopMd:leading-loose desktopMd:text-[14px]  mobileMd:leading-4 mobileMd:text-[9px]  tablet:text-[12px] tablet:leading-7"> As Sometimes some thoughts live beyond a simple human life"</p>
          </div>
          <div className="flex flex-col mobileMd:items-center mobileMd:pr-0 tablet:items-end tablet:pr-16 desktopMd:items-end desktopMd:pr-16 desktopMd:pt-8">
            <div className="mobileMd:pr-0 tablet:pr-7 desktopMd:pr-9 ">
            <img className="mobileMd:w-[100px] tablet:w-[120px] desktopMd:w-[150px]" src={qr}/>
            </div>
            <div className="mobileMd:w-[120px] mobileMd:h-10 mobileMd:mt-2 tablet:w-[190px] tablet:h-12 desktopMd:w-[230px] desktopMd:h-[65px] bg-[#12B7B7] desktopMd:mt-5 rounded-sm border-0 ">
            <button
              className="mobileMd:text-[15px] mobileMd:py-2 tablet:text-[19px] desktopMd:text-[20px] text-center desktopMd:py-5 text-white font-bold desktopMd:leading-7 "> Get Started 
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Thoughtbin;
