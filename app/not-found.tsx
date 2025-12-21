
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return {
    title: "Not found (404)",
    
  };
}

export default function NotFoundPage() {
  return (
      <main className="min-h-[90vh] w-screen overflow-hidden flex items-center justify-center bg-background px-6">
            <div className="max-w-xl  text-center">
              {/* Badge */}
              <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1 text-sm font-medium text-accent mb-6">
                404 • Page not found
              </span>

              {/* Title */}
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
                Oops!
              </h1>

              <p className="text-lg text-foreground/70 mb-10">
                The page you’re looking for doesn’t exist or may have been moved.
                Don’t worry, your journey to the right place continues.
              </p>

              {/* Actions */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/"
                  className="rounded-full bg-accent px-8 py-3 font-semibold text-accent-foreground hover:bg-accent/90 transition"
                >
                  Go Home
                </a>
                <a
                  href="/find-hostels"
                  className="rounded-full border border-border px-8 py-3 font-semibold hover:bg-secondary transition"
                >
                  Find Hostels
                </a>
              </div>

              {/* Decorative */}
              <div className="mt-16 text-sm text-foreground/50">
                Still lost? Try exploring our community or search for nearby hostels.
              </div>
            </div>

            {/* Background effects */}
            <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-32 right-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
          </main>
  )
}
