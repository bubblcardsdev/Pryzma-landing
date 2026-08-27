import Navbar from "@/components/Navbar";

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {children}
    </>
  );
}
