"use client"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { HeartHandshake } from "lucide-react"

interface ThankYouModalProps {
  open: boolean
  onClose: () => void
}

export default function DonationThankYouModal({
  open,
  onClose,
}: ThankYouModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md rounded-3xl p-8 text-center">
        <DialogTitle></DialogTitle>
        <div className="flex justify-center mb-5">
          <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
            <HeartHandshake className="w-7 h-7 text-accent" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-3">
          Thank You for Your Kindness 🤍
        </h2>

        <p className="text-foreground/70 mb-6">
          Your donation is not just money  it is hope, safety, and a better
          future for students.
        </p>

        <div className="bg-secondary/40 border border-border rounded-2xl p-5 mb-6">
          <p className="text-sm italic text-foreground/80 leading-relaxed">
            “The believer’s shade on the Day of Resurrection will be his charity.”
          </p>
          <p className="text-xs text-muted-foreground mt-2">
             Prophet Muhammad ﷺ (Tirmidhi)
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full rounded-full bg-accent text-accent-foreground py-3 font-semibold hover:bg-accent/90 transition"
        >
          Continue
        </button>
      </DialogContent>
    </Dialog>
  )
}
