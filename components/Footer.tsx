import Image from "next/image";
import Link from "next/link";
import Logo from "../public/Images/fotterLogo.svg"

export default function Footer() {
  return (
    <footer className="w-full bg-[#EE5A7A] text-white mt-auto py-3 md:py-4">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src={Logo}
            alt="Pryzma"
            width={120}
            height={25}
            className="w-24 md:w-32 h-auto"
          />

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-[10px] md:text-xs text-white/90">
            <span className="whitespace-nowrap">
              © 2022 All right reserved @pryzma.
            </span>

            <div className="flex items-center gap-3">
              <Link
                href="/privacy-policy"
                className="hover:underline whitespace-nowrap"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-conditions"
                className="hover:underline whitespace-nowrap"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}