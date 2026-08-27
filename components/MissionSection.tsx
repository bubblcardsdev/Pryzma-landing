import React from "react";
import Image, { StaticImageData } from "next/image";
import CloudImage from "../public/Images/Union.svg";
import bgYellow from "../public/Images/bgyellow.png";
import flyChar from "../public/Images/flyChar.svg";
import MissionCardBase from "../public/Images/missionCardBase.svg";
import frame from "../public/Images/aboutFrame.svg"

const ABOUT_TEXT =
  "Pryzma is a white-label loyalty and customer engagement platform that helps businesses turn customers into regulars. From rewards and personalized offers to automation, notifications, and customer insights, Pryzma brings everything together to build stronger relationships and drive repeat visits.";

const MISSION_TEXT =
  "Pryzma aims to be the bridge between brands and their customers, turning everyday interactions into long-term relationships.";

const VISION_TEXT =
  "We envision a future where businesses understand, engage, and grow with their customers. Pryzma makes loyalty more personal, engagement more meaningful, and growth more sustainable — because lasting growth starts with lasting relationships.";

type InfoCardProps = {
  image: StaticImageData;
  title: string;
  text: string;
  wrapperClassName?: string;
  textBoxClassName?: string;
  textClassName?: string;
};

const InfoCard = ({
  image,
  title,
  text,
  wrapperClassName = "",
  textBoxClassName = "absolute left-[8%] top-[24%] w-[60%]",
  textClassName = "text-[clamp(7px,3.8cqw,18px)] leading-snug text-white/95",
}: InfoCardProps) => (
  <div className={`relative aspect-[580/468] @container overflow-hidden ${wrapperClassName}`}>
    <Image src={image} alt="" fill className="object-contain" />

    <div className="absolute left-[8%] top-[10%] w-[80%]">
      <h3 className="text-[clamp(10px,6cqw,22px)] font-extrabold whitespace-nowrap text-white">
        {title}
      </h3>
    </div>

    <div className={textBoxClassName}>
      <p className={textClassName}>{text}</p>
    </div>
  </div>
);

const MissionSection = () => {
  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      {/* Mobile / tablet layout: stacked cards, no reliance on the wide cloud illustration */}
      <div className="relative w-full md:hidden">
        <Image
          src={bgYellow}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="relative mx-auto flex max-w-md flex-col items-center gap-6 px-6 py-10">
          <Image
            src={flyChar}
            alt="Pryzma"
            className="h-auto w-28 object-contain"
          />

          <InfoCard
            image={MissionCardBase}
            title="About US"
            text={ABOUT_TEXT}
            wrapperClassName="w-full"
            textBoxClassName="absolute left-[8%] top-[24%] w-[58%]"
            textClassName="text-[clamp(7px,3.6cqw,18px)] leading-snug text-white/95"
          />

          <InfoCard
            image={frame}
            title="Our Mission"
            text={MISSION_TEXT}
            wrapperClassName="w-full"
            textBoxClassName="absolute left-[8%] top-[24%] w-[62%]"
            textClassName="text-[clamp(7px,3.9cqw,19px)] leading-snug text-white/95"
          />

          <InfoCard
            image={frame}
            title="Our Vision"
            text={VISION_TEXT}
            wrapperClassName="w-full"
            textBoxClassName="absolute left-[8%] top-[24%] w-[62%]"
            textClassName="text-[clamp(7px,3.9cqw,18px)] leading-snug text-white/95"
          />
        </div>
      </div>

      {/* Desktop layout: cards positioned over the cloud illustration */}
      <div className="relative mx-auto hidden aspect-[1769/1538] w-full md:block">
        <Image
          src={CloudImage}
          alt=""
          priority
          fill
          sizes="100vw"
          className="object-cover"
        />

        {/* Content */}
        <div className="absolute left-[18%] right-[18%] top-[17%] bottom-[13%] flex flex-col justify-center gap-[2.5%]">
          {/* Top row */}
          <div className="flex items-center justify-center gap-[3%]">
            <InfoCard
              image={MissionCardBase}
              title="About US"
              text={ABOUT_TEXT}
              wrapperClassName="w-[40%]"
              textBoxClassName="absolute left-[8%] top-[24%] w-[58%]"
              textClassName="text-[clamp(7px,3.6cqw,18px)] leading-snug text-white/95"
            />

            {/* Character */}
            <div className="flex w-[34%] items-center justify-center">
              <Image
                src={flyChar}
                alt="Pryzma"
                className="h-auto w-full max-w-70 object-contain"
              />
            </div>
          </div>

          {/* Bottom cards */}
          <div className="flex items-start justify-center gap-[3%]">
            <InfoCard
              image={frame}
              title="Our Mission"
              text={MISSION_TEXT}
              wrapperClassName="w-[39%]"
              textBoxClassName="absolute left-[8%] top-[24%] w-[62%]"
              textClassName="text-[clamp(7px,3.9cqw,19px)] leading-snug text-white/95"
            />

            <InfoCard
              image={frame}
              title="Our Vision"
              text={VISION_TEXT}
              wrapperClassName="w-[39%]"
              textBoxClassName="absolute left-[8%] top-[24%] w-[62%]"
              textClassName="text-[clamp(7px,3.9cqw,18px)] leading-snug text-white/95"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;