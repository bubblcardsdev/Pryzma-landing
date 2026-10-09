import Link from "next/link";
import Navbar from "./Navbar";

// Sticky navbar + back button + page title for the legal pages
export default function LegalHeader({ title }: { title: string }) {
  return (
    <div className="sticky top-0 z-50">
      <Navbar />

      <div className="bg-[#FF4D6D]">
        <div className="max-w-7xl mx-auto px-8 pt-8 pb-4 text-white">
          <Link
            href="/"
            className="mb-4 inline-block rounded-lg border border-white/40 px-3 py-1.5 text-sm hover:bg-white/10 transition"
          >
            ← Back
          </Link>

          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
}
