"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Group from "../public/Images/Group.png";
import GroupTwo from "../public/Images/GroupTwo.png";
import GroupThree from "../public/Images/GroupThree.png";
import GroupFive from "../public/Images/GroupFive.png";
import heartIcon from "../public/Images/heartIcon.svg";
import Gift from "../public/Images/Gift.svg";
import Dollar from "../public/Images/dollar.png";
import stars from "../public/Images/start.png";
import Lottie from "lottie-react";
import mascotAnimate from "@/src/assets/mascotAnimate.json";
import animateVideo from "@/src/assets/animateVideo.gif"

export default function Home() {
  const features = [
    {
      icon: Group,
      title: "More Visits",
      description: "Increase repeat footfall with habit-driven rewards.",
    },
    {
      icon: GroupTwo,
      title: "More Engagements",
      description: "Direct connection with your customers.",
    },
    {
      icon: GroupThree,
      title: "More Revenue",
      description: "Boost lifetime value through repeat behavior.",
    },
    {
      icon: GroupFive,
      title: "More Insights",
      description: "Real-time customer data & behavior tracking.",
    },
  ];

  const [isBehind, setIsBehind] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBehind(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="grow flex flex-col justify-between overflow-hidden bg-white relative px-4 md:px-8 py-2 md:py-6 select-none">
      <div className="absolute top-[8%] left-[10%] md:left-[15%] pointer-events-none">
        <Image
          src={stars}
          alt="Star"
          width={40}
          height={60}
          className="w-6 md:w-10 h-auto opacity-80"
        />
      </div>

      <div className="absolute top-[12%] right-[10%] md:right-[15%] pointer-events-none ">
        <Image
          src={heartIcon}
          alt="Heart"
          width={50}
          height={50}
          className="w-8 md:w-12 h-auto"
        />
      </div>

      <div className="absolute top-[32%] left-[6%] md:left-[19%] pointer-events-none z-10">
        <div className="relative w-12 h-12 md:w-20 md:w-20 flex items-center justify-center">
          <Image
            src={Dollar}
            alt="Coin"
            width={70}
            height={74}
            className="w-10 md:w-16 h-auto animate-spin"
            style={{ animationDuration: "6s" }}
          />
        </div>
      </div>

      <div className="absolute top-[33%] right-[6%] md:right-[19%] pointer-events-none z-10">
        <Image
          src={Gift}
          alt="Gift"
          width={65}
          height={69}
          className="w-10 md:w-16 h-auto animate-bounce"
          style={{ animationDuration: "4.5s" }}
        />
      </div>

      <section className="text-center z-10 max-w-4xl mx-auto flex flex-col justify-center items-center mt-1 md:mt-2">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
          Stop Renting Customers.
        </h1>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black tracking-tight leading-tight">
          Own the Relationship.
        </h1>
        <p className="mt-1 text-[11px] sm:text-xs md:text-sm lg:text-base text-gray-600 max-w-2xl px-4 font-medium leading-normal">
          Turn every visit into a habit with your own branded loyalty app<br></br>
          designed for modern brands.
        </p>
      </section>

      <section className="flex-grow flex items-center justify-center relative mt-1 md:mt-2 max-h-[45vh] lg:max-h-[48vh] overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] xl:grid-cols-[300px_1fr_300px] items-center gap-3 px-2 md:px-4 h-full">
          <div className="hidden lg:flex flex-col gap-4 justify-center">
            {features.slice(0, 2).map((feature, index) => (
              <div
                key={index}
                className="bg-[#FFF5F6] border border-[#FCE8EC] rounded-full px-4 py-2.5 xl:px-5 xl:py-3.5 flex items-center gap-3 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 xl:w-10 xl:h-10 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xs xl:text-sm text-[#E34F74] leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[9px] xl:text-[14px] text-gray-500 mt-0.5 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex items-center justify-center h-full w-full overflow-hidden">


            <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
              <div className="relative min-h-0 h-[15vh] lg:ml-6 sm:h-[16vh] lg:h-[28vh] aspect-[790/390] overflow-hidden">
                <Image
                  src={animateVideo}
                  alt=""
                  unoptimized
                  fill
                  className="object-cover object-left"
                />
              </div>
              <div className="min-h-0 -mt-[4vh] h-[22vh] sm:-mt-[5vh] sm:h-[24vh] lg:-mt-[9vh] lg:h-[45vh]">
                <Lottie
                  animationData={mascotAnimate}
                  loop
                  autoplay
                  style={{ height: "100%" }}
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4 justify-center">
            {features.slice(2).map((feature, index) => (
              <div
                key={index}
                className="bg-[#FFF5F6] border border-[#FCE8EC] rounded-full px-4 py-2.5 xl:px-4 xl:py-3.5 flex items-center gap-3 hover:scale-105 transition-transform duration-300"
              >
                <div className="flex-shrink-0 w-8 h-8 xl:w-10 xl:h-9 relative">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xs xl:text-sm text-[#E34F74] leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-[9px] xl:text-[14px] text-gray-500 mt-0.5 leading-snug">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lg:hidden w-full max-w-md mx-auto grid grid-cols-2 gap-2 sm:gap-3 px-2 mb-2 z-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#FFF5F6] border border-[#FCE8EC] rounded-2xl p-2.5 sm:p-3 flex flex-col items-center text-center shadow-sm"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 relative mb-1.5">
              <Image
                src={feature.icon}
                alt={feature.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-bold text-xs sm:text-sm text-[#E34F74] leading-tight">
              {feature.title}
            </h3>
            <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5 leading-tight line-clamp-2">
              {feature.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
