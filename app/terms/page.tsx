export function generateMetadata() {
  return {
    title: "Terms & Conditions | HostelHub",
    description:
      "Read HostelHub Terms & Conditions covering hostels, roommate discovery, community features, user responsibilities, and platform policies.",
    keywords:
      "hostelhub terms, hostelhub conditions, find roommate terms, student community rules, pakistan hostels, student housing platform",
    alternates: {
      canonical: "https://hostelhub.pk/terms",
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Terms & Conditions | HostelHub",
      description:
        "Official Terms & Conditions for using HostelHub services including hostels, roommate discovery, and community features.",
      url: "https://hostelhub.pk/terms",
      siteName: "HostelHub",
      type: "website",
    },
  };
}

export default function Terms() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-foreground/70">
            Last updated: March 2025
          </p>
        </div>

        <div className="prose prose-sm max-w-none space-y-10 text-foreground/70">

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using HostelHub, you agree to be bound by these
              Terms & Conditions. If you do not agree, you must not use the
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              2. Platform Services
            </h2>
            <p>
              HostelHub provides services including hostel listings, student
              accommodation discovery, roommate-finding features, and
              community-based content. HostelHub acts as a technology platform
              only and does not own, manage, or operate hostels or shared rooms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              3. Find Roommate Feature
            </h2>
            <p>
              The Find Roommate feature allows users to post and view roommate
              requests. HostelHub does not verify personal compatibility,
              behavior, or agreements between users. Any communication or
              arrangement is made at the user’s own risk.
            </p>
            <p>
              HostelHub is not responsible for disputes, misrepresentation, or
              offline interactions between users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              4. Community Guidelines
            </h2>
            <p>
              Community features are provided for discussion, learning, and
              student engagement. Users must not post abusive, misleading,
              illegal, or inappropriate content.
            </p>
            <p>
              HostelHub reserves the right to moderate, remove content, or
              suspend accounts that violate community standards.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              5. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Use the platform only for lawful purposes</li>
              <li>Respect other users and platform policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              6. Prohibited Activities
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Fraud, impersonation, or misleading content</li>
              <li>Harassment, hate speech, or abusive behavior</li>
              <li>Scraping, hacking, or reverse engineering</li>
              <li>Commercial solicitation without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              7. Disclaimer
            </h2>
            <p>
              HostelHub provides services on an “as-is” and “as-available”
              basis. We make no guarantees regarding accuracy, availability,
              safety, or outcomes of platform usage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              8. Limitation of Liability
            </h2>
            <p>
              HostelHub shall not be liable for any direct, indirect, incidental,
              or consequential damages arising from use of the platform,
              including roommate interactions or third-party listings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              9. Account Suspension & Termination
            </h2>
            <p>
              HostelHub may suspend or terminate accounts without prior notice
              if users violate these terms or engage in harmful activity.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              10. Privacy
            </h2>
            <p>
              Use of HostelHub is also governed by our Privacy Policy, which
              explains how user data is collected and used.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              11. Changes to Terms
            </h2>
            <p>
              HostelHub may update these Terms & Conditions at any time.
              Continued use of the platform indicates acceptance of the revised
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              12. Governing Law
            </h2>
            <p>
              These terms are governed by the laws of Pakistan. Any disputes
              shall be subject to the exclusive jurisdiction of Pakistani courts.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
