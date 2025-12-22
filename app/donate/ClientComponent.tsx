"use client"

import { useState } from "react"
import {
    HeartHandshake,
    GraduationCap,
    Users,
    ShieldCheck,
    HandCoins,
    CreditCard,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import DonationThankYouModal from "./DoateThanksModal"

export default function ClientComponent() {
    const [open, setOpen] = useState(false)
    const [method, setMethod] = useState("")
    const [thankYouOpen, setThankYouOpen] = useState(false)



    const donors = [
        { name: "Ahsan Khan", amount: "PKR 10,000" },
        { name: "Sara Ali", amount: "PKR 6,500" },
        { name: "Usman Raza", amount: "PKR 15,000" },
        { name: "Fatima Noor", amount: "PKR 4,000" },
    ]


    const handleFormSubmit = (e: any) => {
        e.preventDefault()
        setThankYouOpen(true)
        setOpen(false)
        setMethod("")
        
    }

    return (
        <main className="">


            {/* HERO */}
            <section className="py-28">
                <div className="absolute -z-10 top-0 inset-0 bg-linear-to-tl to-accent/25 via-background from-background" />

                <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-5xl font-bold leading-tight mb-6">
                            This is not a <span className="undercurve">donation</span> for us.It’s for your
                            <br />
                            <span className="text-accent">
                                children’s future.
                            </span>
                        </h1>
                        <p className="text-lg text-foreground/70 mb-8">
                            HostelHub is building Pakistan’s first student-first ecosystem
                            safe accommodation, trusted communities, scholarships, guidance,
                            and opportunities for students away from home.
                        </p>
                        <button
                            onClick={() => setOpen(true)}
                            className="rounded-full bg-accent px-10 py-4 text-accent-foreground font-semibold "
                        >
                            Donate for Students
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-card rounded-3xl p-6 m">
                            <GraduationCap className="text-accent w-8 h-8 mb-3" />
                            <p className="font-semibold">Education Support</p>
                            <p className="text-sm text-foreground/70">
                                Helping students stay focused on studies
                            </p>
                        </div>
                        <div className="bg-card rounded-3xl p-6 m">
                            <ShieldCheck className="text-accent w-8 h-8 mb-3" />
                            <p className="font-semibold">Safe Living</p>
                            <p className="text-sm text-foreground/70">
                                Verified hostels & protection
                            </p>
                        </div>
                        <div className="bg-card rounded-3xl p-6 m">
                            <Users className="text-accent w-8 h-8 mb-3" />
                            <p className="font-semibold">Student Community</p>
                            <p className="text-sm text-foreground/70">
                                Guidance, support & belonging
                            </p>
                        </div>
                        <div className="bg-card rounded-3xl p-6 m">
                            <HeartHandshake className="text-accent w-8 h-8 mb-3" />
                            <p className="font-semibold">Future Impact</p>
                            <p className="text-sm text-foreground/70">
                                Long-term national growth
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* DONORS MARQUEE */}
            <section className="py-12  overflow-hidden">
                <h3 className="text-center text-xl font-bold mb-10">
                    Recent Supporters
                </h3>
                <div className="flex gap-6 animate-marquee px-6">
                    {[...donors, ...donors].map((d, i) => (
                        <div
                            key={i}
                            className="min-w-[150px]   flex flex-col items-center "
                        >
                            <span className="font-semibold">{d.name}</span>
                            <span className="text-muted-foreground font-bold">{d.amount}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* WHY DONATE */}
            <section className="py-24 ">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-14">
                        Why Your Donation Matters
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-card rounded-3xl p-8">
                            <Users className="w-10 h-10 text-accent mb-4" />
                            <h3 className="font-bold text-xl mb-3">
                                Students Without Support
                            </h3>
                            <p className="text-foreground/70">
                                Thousands of students migrate every year with no guidance,
                                unsafe housing, and emotional stress. We fix that gap.
                            </p>
                        </div>

                        <div className="bg-card rounded-3xl p-8">
                            <HandCoins className="w-10 h-10 text-accent mb-4" />
                            <h3 className="font-bold text-xl mb-3">
                                Transparent Usage
                            </h3>
                            <p className="text-foreground/70">
                                Your money directly supports free student tools, community
                                features, platform growth, and scholarship discovery.
                            </p>
                        </div>

                        <div className="bg-card rounded-3xl p-8">
                            <GraduationCap className="w-10 h-10 text-accent mb-4" />
                            <h3 className="font-bold text-xl mb-3">
                                Nation Builders
                            </h3>
                            <p className="text-foreground/70">
                                Today’s students are tomorrow’s doctors, engineers, teachers,
                                and leaders of Pakistan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMPACT */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
                    {[
                        ["10K+", "Students Helped"],
                        ["500+", "Verified Hostels"],
                        ["Free", "Student Access"],
                        ["Growing", "Community Impact"],
                    ].map(([v, l], i) => (
                        <div key={i} className="bg-card rounded-3xl p-8">
                            <p className="text-4xl font-bold text-accent mb-2">{v}</p>
                            <p className="text-foreground/70">{l}</p>
                        </div>
                    ))}
                </div>
            </section>



            {/* FINAL CTA */}
            <section className="py-28 text-center">
                <h2 className="text-4xl font-bold mb-4">
                    You’re not donating money.
                </h2>
                <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10">
                    You’re donating safety, dignity, education, and hope for students who
                    left their homes to build a better future.
                </p>
                <button
                    onClick={() => setOpen(true)}
                    className="rounded-full bg-accent px-14 py-4 text-accent-foreground font-semibold shadow-lg"
                >
                    Make a Donation
                </button>
            </section>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setOpen(false)}
                    />
                    <form onSubmit={(e) => handleFormSubmit(e)} className="relative bg-card rounded-3xl w-full max-w-lg p-8 z-10">
                        <h3 className="text-2xl font-bold flex items-center gap-2">
                            <CreditCard className="w-6 h-6 text-accent" />
                            Donate Securely
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 mt-2">Send money to the provided banks, e-wallets and fill the form. Thanks ♥</p>

                        <select
                            value={method} required
                            onChange={(e) => setMethod(e.target.value)}
                            className="w-full mb-4 px-4 py-3 rounded-full bg-card border-border focus:ring-2 ring-accent border"
                        >
                            <option value="">Select Payment Method</option>
                            <option>EasyPaisa</option>
                            <option>JazzCash</option>
                            <option>Bank Transfer</option>
                        </select>

                        {method && (
                            <div className="bg-secondary rounded-xl p-4 text-sm mb-4">
                                <p><b>Account Name:</b> HostelHub Foundation</p>
                                <p><b>Account Number:</b> 03XX-XXXXXXX</p>
                                <p><b>IBAN:</b> PK00XXXX000000</p>
                            </div>
                        )}

                        <div className="grid gap-3">
                            <Input required className="p-6 border rounded-full border-border shadow-0 " placeholder="Full Name (Your account name)" />
                            <Input required className="p-6 border rounded-full border-border shadow-0 " placeholder="Your account Number / Iban" />
                            <select className="px-4 py-3 border rounded-full bg-card border-border focus:ring-2 ring-accent">
                                <option value="" disabled>Your occupation</option>
                                <option>Student</option>
                                <option>Parent</option>
                                <option>Professional</option>
                                <option>Employee</option>
                                <option>Other</option>
                            </select>
                            <Input required className="p-6 border rounded-full border-border shadow-0 " placeholder="Amount (PKR) you donated" />

                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <button type="button" onClick={() => setOpen(false)} className="px-6 cursor-pointer hover:bg-secondary/70 py-2 rounded-full border">
                                Cancel
                            </button>
                            <button type="submit" className="px-6 py-2 rounded-full bg-accent cursor-pointer hover:bg-accent/70 text-accent-foreground">
                                I've Donated
                            </button>
                        </div>
                    </form>
                </div>
            )}


            <DonationThankYouModal
                open={thankYouOpen}
                onClose={() => setThankYouOpen(false)}
            />
            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 22s linear infinite;
        }
      `}</style>

        </main>
    )
}
