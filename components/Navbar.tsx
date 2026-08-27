"use client";

import Image from "next/image";
import heroImage from "../public/Images/headerlogo.avif"
import { useRouter,usePathname } from "next/navigation";


export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();
  return (
    
<nav className="w-full bg-white py-3 md:py-4">
  <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between">
    <div className="flex items-center gap-3 md:gap-4">
      <Image
        src={heroImage}
        alt="Pryzma Logo"
        width={140}
        height={29}
        className="w-28 md:w-36 h-auto cursor-pointer"
        priority
         onClick={() => router.push("/")}
      />

      <div className="hidden sm:block h-8 w-px bg-gray-300" />

      <p className="hidden sm:block text-xs md:text-sm font-medium leading-tight text-black">
        Loyalty That Brings
        <br />
        Customer Back
      </p>
    </div>

    <div className="flex items-center gap-3 sm:gap-6 md:gap-10">
      <button
       onClick={() => router.push("/about")}
      className={`text-gray-800 transition cursor-pointer text-sm md:text-[18px] ${
    pathname === "/about"
      ? "text-pink-500 font-semibold"
      : "text-gray-800 hover:text-pink-500"
  }`}>
        About
      </button>

      {/* <button 
       onClick={() => router.push("/contact")}
      className={`text-gray-800 transition cursor-pointer text-sm md:text-[18px] ${
    pathname === "/contact"
      ? "text-pink-500 font-semibold"
      : "text-gray-800 hover:text-pink-500"
  }`}>
        Contact
      </button> */}

      <button
        onClick={() => router.push("/signup-form")}
        className="bg-black text-white rounded-full px-4 py-2 md:px-8 md:py-3 text-xs md:text-[16px] font-medium hover:bg-neutral-800 transition cursor-pointer whitespace-nowrap"
      >
        Contact Us
      </button>
    </div>
  </div>
</nav>
  );
}
