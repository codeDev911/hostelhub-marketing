"use client"

export default function NotFoundPage() {
    return (
        <main className=" min-h-screen flex  items-center justify-center bg-background px-6 overflow-hidden">
            {/* Background effects */}
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-destructive/20 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />

            <div className="max-w-xl text-center relative">
                {/* Badge */}
                <span className="inline-flex items-center rounded-full bg-destructive/10 px-4 py-1 text-sm font-medium text-destructive mb-6">
                    500 • Server error
                </span>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
                    Something went wrong
                </h1>

                <p className="text-lg text-foreground/70 mb-10">
                    Our system hit a snag while processing your request.
                    We’re already working on it — please try again in a moment.
                </p>

                {/* Actions */}
                <div className="flex flex-wrap justify-center gap-4">
                    <button
                        onClick={() => window.location.reload()}
                        className="rounded-full bg px-8 py-3 font-semibold text-destructive border-destructive border cursor-pointer transition"
                    >
                        Retry
                    </button>
                    <a
                        href="/"
                        className="rounded-full border border-border px-8 py-3 font-semibold hover:bg-secondary transition"
                    >
                        Go Home
                    </a>
                </div>

                {/* Helper text */}
                <p className="mt-12 text-sm text-foreground/50">
                    If the problem persists, please contact support at
                    <span className="font-medium text-primary"> support@hostelhub.pk</span>
                </p>
            </div>
        </main>

    )
}

