import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
         <div className="bg-[#FF4D6D] min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-14 text-white">
        <Link
          href="/"
          className="mb-4 inline-block rounded-lg border border-white/40 px-3 py-1.5 text-sm hover:bg-white/10 transition"
        >
          ← Back
        </Link>

        <h2 className="text-2xl font-bold mb-8">
          Privacy Policy
        </h2>

        <p className="mb-10 text-lg leading-8">
         Pryzma values your privacy. This Privacy Policy explains how we collect, use, and protect your
information when you use our website and services.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
           1. Information We Collect
          </h2>

          <p className="leading-8 text-lg">
           We may collect basic information when you interact with our website, such as:
          </p>
            <ul className="list-disc pl-8 space-y-1">
                <li className="text-lg">Name</li>
                <li className="text-lg">Email address</li>
                <li className="text-lg">Phone number</li>
                <li className="text-lg">Business information</li>
                <li className="text-lg">Any details submitted through contact forms</li>
            </ul>
            <p className="leading-8 text-lg">
                This information helps us respond to inquiries and improve our services.
            </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
          2.How We Use Your Information
          </h2>

          <p className="mb-4 text-lg">
           We use the collected information to:
          </p>

          <ul className="list-disc pl-8 space-y-1">
            <li className="text-lg">Respond to your questions or requests</li>
            <li className="text-lg">Provide information about Pryzma services</li>
            <li className="text-lg">Improve our platform and website experience</li>
            <li className="text-lg">Communicate updates or service-related information</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            3. Customer Data
          </h2>

          <p className="leading-8 text-lg">
           Businesses using Pryzma may collect customer information through their loyalty programs.
Pryzma only provides the platform, and each business is responsible for managing its customer data in compliance withapplicable
privacy laws.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
           4. Data Protection
          </h2>

          <p className="leading-8 text-lg">
           We take reasonable steps to protect your information from unauthorized access, loss, or misuse.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
           Third-Party Services
          </h2>

          <p className="leading-8 text-lg">
            Our website or platform may include integrations or links to third-party services. Pryzma is not responsible

for the privacy practices of those external services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
            6. Cookies
          </h2>

          <p className="leading-8 text-lg">
            Our website may use cookies to improve user experience and understand website usage.
          Cookies help us enhance performance and provide better services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">
           7. Changes to This Policy
          </h2>

          <p className="leading-8 text-lg">
           We may update this Privacy Policy from time to time. Any updates will be posted on this page with the revised date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            8. Contact Us
          </h2>
          <p className="text-lg">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <h2 className="leading-8 text-lg">
            Email: support@pryzma.com
            <br />
            Website: www.pryzma.com
          </h2>
        </section>
      </div>
    </div>
    
    </>
  )
  ;
}