import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Privacy Policy | HostelHub",
    description:
      "Learn how HostelHub collects, uses, and protects your data across hostels, roommate finder, and community features.",
    keywords:
      "hostelhub privacy, roommate privacy, student housing data pakistan, hostelhub data policy",
    alternates: {
      canonical: "https://hostelhub.pk/privacy-policy",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function Privacy() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-primary mb-4">
          Privacy Policy
        </h1>
        <p className="text-foreground/70 mb-12">Last updated: March 2025</p>

        <div className="space-y-8 text-foreground/70">

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              1. Introduction
            </h2>
            <p>
              This Privacy Policy explains how HostelHub collects and uses
              information across hostel listings, roommate finder, and
              community features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              2. Information We Collect
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Name, email, phone number</li>
              <li>City, area, and accommodation preferences</li>
              <li>Roommate profile details and preferences</li>
              <li>Community posts, comments, and interactions</li>
              <li>Device and usage analytics</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              3. How We Use Your Data
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide hostel and roommate matching services</li>
              <li>Enable community interaction</li>
              <li>Improve platform security and performance</li>
              <li>Prevent fraud and misuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              4. Data Sharing
            </h2>
            <p>
              We do not sell user data. Limited data may be shared with service
              providers for platform operation and analytics.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              5. Security
            </h2>
            <p>
              We use industry-standard security measures, but no system is
              100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              6. Policy Updates
            </h2>
            <p>
              We may update this policy periodically. Changes will be posted on
              this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              7. Contact
            </h2>
            <div className="mt-4 p-4 bg-card rounded-2xl">
              <p className="font-semibold text-foreground">
                Email: privacy@hostelhub.pk
              </p>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
