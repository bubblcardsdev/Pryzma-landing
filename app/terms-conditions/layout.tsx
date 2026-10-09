// app/terms-conditions/layout.tsx

import LegalHeader from "@/components/LegalHeader";

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LegalHeader title="Terms & Conditions" />

      {children}
    </>
  );
}
