import Link from "next/link";

export default function TermsAndConditions() {
  return (
    <div className="bg-[#FF4D6D] min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-14 text-white">
        <Link
          href="/"
          className="mb-4 inline-block rounded-lg border border-white/40 px-3 py-1.5 text-sm hover:bg-white/10 transition"
        >
          ← Back
        </Link>

        <h2 className="text-2xl font-bold mb-8">
          Terms & Conditions
        </h2>

        <p className="mb-10 text-lg leading-8">
          Welcome to Pryzma. By accessing or using our website and services,
          you agree to the following Terms & Conditions.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            1. About Pryzma
          </h2>

          <p className="leading-8 text-lg">
            Pryzma is a white-label software platform that helps businesses,
            especially restaurants, cafes, and hotels, create and manage
            customer loyalty programs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            2. Use of the Platform
          </h2>

          <p className="mb-4 text-lg">
            By using Pryzma, you agree to:
          </p>

          <ul className="list-disc pl-8 space-y-1">
            <li className="text-lg">Use the platform only for legitimate business purposes</li>
            <li className="text-lg">Provide accurate information when contacting or registering</li>
            <li className="text-lg">Not misuse, copy, or attempt to modify the software</li>
            <li className="text-lg">
              We reserve the right to restrict access if these terms are
              violated
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            3. White-Label Service
          </h2>

          <p className="leading-8 text-lg">
            Pryzma allows businesses to launch their own branded loyalty
            programs. Businesses using the platform are responsible for the
            offers, rewards, and promotions provided to their customers.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            4. Intellectual Property
          </h2>

          <p className="leading-8 text-lg">
            All content on this website, including logos, designs, and
            software, belongs to Pryzma and cannot be copied or reused without
            permission.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            5. Data & Privacy
          </h2>

          <p className="leading-8 text-lg">
            We respect user privacy and handle information according to our
            Privacy Policy. Businesses using Pryzma are responsible for managing
            their customer data responsibly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            6. Service Availability
          </h2>

          <p className="leading-8 text-lg">
            We aim to provide reliable services but cannot guarantee
            uninterrupted access at all times.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            7. Changes to Terms
          </h2>

          <p className="leading-8 text-lg">
            Pryzma may update these Terms & Conditions when necessary. Updates
            will be posted on this page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            8. Contact Us
          </h2>
          <p className="text-lg">
            If you have any questions about these Terms & Conditions, please contact us:
          </p>
          <h2 className="leading-8 text-lg">
            Email: support@pryzma.com
            <br />
            Website: www.pryzma.com
          </h2>
        </section>
      
      </div>
    </div>
  );
}