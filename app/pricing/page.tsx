import { Check, X, Star, Building2, Users, BedDouble, Headset } from "lucide-react";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "HostelHub Pricing & Plans – Simple, Affordable Hostel Management in Pakistan",
    description:
        "Explore HostelHub pricing plans for hostel owners in Pakistan. Simple monthly plans to manage students, rooms, payments, and grow your hostel business online with ease.",
    keywords: [
        "HostelHub pricing",
        "hostel management software Pakistan",
        "hostel management system",
        "hostel software pricing",
        "hostel owner plans",
        "student hostel management",
        "hostel dashboard Pakistan",
        "hostel business software",
        "hostel automation Pakistan",
        "manage hostel online",
    ],
    openGraph: {
        title: "HostelHub Pricing – Smart Plans for Hostel Owners",
        description:
            "Choose a simple and affordable HostelHub plan. Manage hostels, students, rooms, and payments with Pakistan’s trusted hostel management platform.",
        url: "https://hostelhub.pk/plans",
        siteName: "HostelHub",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "HostelHub Pricing & Plans",
        description:
            "Affordable monthly plans for hostel owners in Pakistan. Manage students, rooms, payments & grow your hostel digitally.",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function PlansPage() {
    return (
        <main className="min-h-screen bg-background py-16">

            <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center  my-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Choose a plan that fits your hostel size. No hidden charges. Upgrade anytime as your business grows.
                    </p>
                </div>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Starter Plan */}
                    <PlanCard
                        name="Starter"
                        price="1,500"
                        description="Perfect for small hostels getting started online."
                        limits={[
                            { icon: <Building2 size={18} />, text: "1 Hostel" },
                            { icon: <Users size={18} />, text: "Up to 50 Students" },
                            { icon: <BedDouble size={18} />, text: "Up to 30 Rooms" },
                        ]}
                        features={[
                            { label: "SMS Alerts", value: false },
                            { label: "Digital Receipts", value: "Basic" },
                            { label: "Financial Reports", value: "Summary Only" },
                            { label: "Support", value: "Email" },
                        ]}
                        cta="Get Started"
                    />

                    {/* Business Plan (Popular) */}
                    <PlanCard
                        highlighted
                        name="Business"
                        price="3,000"
                        description="Best for growing hostels with multiple properties."
                        limits={[
                            { icon: <Building2 size={18} />, text: "Up to 3 Hostels" },
                            { icon: <Users size={18} />, text: "Up to 200 Students" },
                            { icon: <BedDouble size={18} />, text: "Up to 100 Rooms" },
                        ]}
                        features={[
                            { label: "SMS Alerts", value: true },
                            { label: "Digital Receipts", value: "Custom Branded" },
                            { label: "Financial Reports", value: "Detailed Ledger" },
                            { label: "Support", value: "WhatsApp Priority" },
                        ]}
                        cta="Start Free Trial"
                    />

                    {/* Enterprise Plan */}
                    <PlanCard
                        name="Enterprise"
                        price="6,000"
                        description="Built for large hostel groups & franchises."
                        limits={[
                            { icon: <Building2 size={18} />, text: "Unlimited Hostels" },
                            { icon: <Users size={18} />, text: "Unlimited Students" },
                            { icon: <BedDouble size={18} />, text: "Unlimited Rooms" },
                        ]}
                        features={[
                            { label: "SMS Alerts", value: true },
                            { label: "Digital Receipts", value: "Custom Branded" },
                            { label: "Financial Reports", value: "Advanced Analytics" },
                            { label: "Support", value: "24/7 Dedicated Manager" },
                        ]}
                        cta="Contact Sales"
                    />

                </div>

                {/* Footer Note */}
                <div className="text-center mt-16 text-sm text-muted-foreground">
                    Prices are monthly in PKR. No long-term contracts. Cancel anytime.
                </div>
            </div>
        </main>
    );
}

/* ---------------- COMPONENT ---------------- */

function PlanCard({
    name,
    price,
    description,
    limits,
    features,
    cta,
    highlighted = false,
}: any) {
    return (
        <div
            className={`relative rounded-2xl p-8   bg-card  transition-all ${highlighted
                    ? "border-accent ring-2 ring-accent"
                    : "border-border"
                }`}
        >
            {highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm flex items-center gap-1">
                    <Star size={14} /> Most Popular
                </div>
            )}

            <h3 className="text-2xl font-bold text-primary mb-2">{name}</h3>
            <p className="text-muted-foreground mb-6 text-sm">{description}</p>

            <div className="mb-6">
                <span className="text-4xl font-bold text-primary">₨ {price}</span>
                <span className="text-muted-foreground text-sm"> / month</span>
            </div>

            {/* Limits */}
            <ul className="space-y-3 mb-6">
                {limits.map((item: any, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                        {item.icon}
                        {item.text}
                    </li>
                ))}
            </ul>

            {/* Features */}
            <ul className="space-y-3 mb-8 text-sm">
                {features.map((f: any, i: number) => (
                    <li key={i} className="flex items-center gap-2">
                        {typeof f.value === "boolean" ? (
                            f.value ? (
                                <Check className="text-green-500" size={16} />
                            ) : (
                                <X className="text-red-500" size={16} />
                            )
                        ) : (
                            <Check className="text-green-500" size={16} />
                        )}
                        <span className="text-foreground">
                            {f.label}:{" "}
                            <span className="text-muted-foreground">
                                {typeof f.value === "boolean" ? "" : f.value}
                            </span>
                        </span>
                    </li>
                ))}
            </ul>

            <Link href={`/hostel-registration?plan=${name.toLowerCase()}`}>
                <button
                    className={`w-full py-3 rounded-xl font-semibold transition ${highlighted
                            ? "bg-accent text-accent-foreground hover:bg-accent/90"
                            : "border border-border hover:bg-muted"
                        }`}
                >
                    {cta}
                </button>
            </Link>
        </div>
    );
}
