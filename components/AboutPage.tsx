import React from "react";
import ScrollImage from "../public/Images/scrollBg.svg";
import Image from "next/image";
import MissionSection from "./MissionSection";

const AboutPage = () => {
  const items = Array.from({ length: 20 }, (_, index) => (
    <React.Fragment key={index}>
      <span className="text-[16px] font-bold text-white sm:text-[18px] md:text-[20px]">
        why pryzma
      </span>

      <span className="text-[16px] sm:text-[18px] md:text-[20px]">🪙</span>
    </React.Fragment>
  ));

  return (
    <>
    <section className="relative h-[220px] w-full overflow-hidden bg-white sm:h-[260px] md:h-[300px]">

      <Image
        src={ScrollImage}
        alt=""
        priority
        className="
          absolute
          left-1/2
          top-1/2
          h-full
          w-auto
          max-w-none
          -translate-x-1/2
          -translate-y-1/2
          sm:left-0
          sm:h-auto
          sm:w-full
          sm:max-w-full
          sm:translate-x-0
        "
      />

      <div
        className="
          absolute
          left-0
          top-1/2
          w-full
          -translate-y-1/2
          -rotate-[4deg]
          overflow-hidden
        "
      >
        <div className="flex w-max animate-marquee">

          <div className="flex shrink-0 items-center gap-8 px-4">
            {items}
          </div>

          <div className="flex shrink-0 items-center gap-8 px-4">
            {items}
          </div>

        </div>
      </div>

    </section>
    <MissionSection/>
</>
    
  );
};

export default AboutPage;