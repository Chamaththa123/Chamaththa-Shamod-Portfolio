import React from "react";
import { TypingEffect } from "../components/TypingEffect";

export const Hero = () => {
  const sentences = [
    "Full Stack Web Developer",
    "Mobile Developer",
    "Free Lancer",
  ];

  return (
    <section className="overflow-hidden w-full xl:h-[88vh] bg-[#080831] h-[80vh] md:px-[5%] relative flex items-center justify-center font-press-start">
      <div className=" xl:w-[50%] flex flex-col gap-7 xl:gap-4 items-start">
        <div className="text-white text-2xl font-semibold">Hi, I'm <span className="text-[#ff5823]">Chamaththa Shamod</span></div>
        <div className="text-center text-white text-3xl h-[50px] mt-5 font-semibold ">
          <TypingEffect
            sentences={sentences}
            speed={100}
            eraseSpeed={50}
            delayBetweenSentences={1000}
            delayBeforeErase={2000}
          />
        </div>

        <div className=" text-[#ffffff] text-md font-medium leading-[30px] w-[90%] xl:leading-8 flex flex-col gap-5">
 Welcome to my portfolio showcasing a journey fueled by passion,
          dedication, and a relentless drive for learning and growth. 
        </div>
        <div />
      </div>
      <div className="relative hidden xl:flex xl:w-[50%] h-[100%]  flex-col gap-5  items-center justify-center ">
        <div className=" rounded-[10px] max-w-[520px] xl:max-h-[680px]  overflow-hidden">
          <div className=" absolute top-[-100px] left-[-110px] -z-10">
            xsaxasxasxaxww
          </div>
          xsaxsaxasxa
        </div>
      </div>
    </section>
  );
};
