"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayoutPages = [
    "/terms-conditions",
    "/privacy-policy",
  ];

  const shouldHideLayout = hideLayoutPages.includes(pathname);

  // About page needs its own scroll container
  const isAboutPage = pathname === "/about";

  // Signup form fits navbar + content + footer in one viewport, no page scroll on desktop
  const isSignupPage = pathname === "/signup-form";

  if (shouldHideLayout) {
    return (
      <div className="h-[100dvh] overflow-y-auto overflow-x-hidden">
        {children}
      </div>
    );
  }

  if (isSignupPage) {
    return (
      <div className="flex h-[100dvh] flex-col overflow-y-auto overflow-x-hidden lg:overflow-hidden">
        <div className="shrink-0">
          <Navbar />
        </div>

        <div className="flex-1 lg:min-h-0">{children}</div>

        <div className="shrink-0">
          <Footer />
        </div>
      </div>
    );
  }

  if (isAboutPage) {
    return (
      <div className="h-[100dvh] overflow-y-auto overflow-x-hidden">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <main>
          {children}
        </main>

        <Footer />
      </div>
    );
  }

  // Keep all other pages exactly as they are
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}