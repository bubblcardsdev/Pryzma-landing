import React from "react";
import aboutLogo from "../../public/Images/aboutLogo.png"
import dollarCoin from "../../public/Images/dollar.png"
import starDuo from "../../public/Images/start.png"
import Image from "next/image";
import AboutPage from "@/components/AboutPage";

const Page = () => {
  return (
    <>
      <main className="overflow-hidden bg-white">
       <section className="relative mx-auto flex max-w-300 flex-col items-center px-4 pt-[clamp(2.5rem,10dvh,7rem)] pb-[clamp(1.5rem,6dvh,4rem)]">
         <Image
           src={dollarCoin}
           alt=""
           aria-hidden
           className="pointer-events-none absolute left-[8%] top-[52%] w-10 animate-spin md:w-14"
           style={{ animationDuration: "6s" }}
         />
         <Image
           src={dollarCoin}
           alt=""
           aria-hidden
           className="pointer-events-none absolute right-[6%] top-[78%] w-10 animate-spin md:w-14"
           style={{ animationDuration: "6s" }}
         />
         <Image
           src={starDuo}
           alt=""
           aria-hidden
           className="pointer-events-none absolute left-[18%] top-[22%] w-8 md:w-12"
         />
         <Image
           src={starDuo}
           alt=""
           aria-hidden
           className="pointer-events-none absolute right-[14%] top-[42%] w-8 md:w-12"
         />

         <div className="mb-[clamp(0.75rem,2dvh,1.5rem)]">
           <Image
            src={aboutLogo}
            alt="Pryzma"
            width={350}
            className="mx-auto h-auto w-[clamp(220px,30dvh,350px)]"
            priority
          />
        </div>

        <div className="text-center max-sm:z-10">
          <h1 className="text-3xl font-semibold text-gray-400 md:text-5xl">
            Powering Loyalty.
          </h1>

          <h2 className="mt-1 text-3xl font-bold md:text-5xl">
            Driving <span className="text-[#EE5A7A]">Growth.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600 md:text-base">
            Pryzma is a next-generation white-label loyalty and customer
            engagement platform built to help businesses create meaningful,
            lasting relationships with their customers.
          </p>
        </div>
      </section>
    </main>
    <AboutPage/>
    </>

  );
};

export default Page;