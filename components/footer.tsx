import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div  className="flex items-center  gap-2 transition-opacity ">
              <div className="w-8 h-8 p-1 bg-white rounded-sm flex items-center justify-center">
                <img src="/logo.png" className="w-full h-full" alt="Logo"/>
              </div>
              <h4 className="font-bold  text-lg text-primary ">HostelHub</h4>
            </div>
            <p className="text-sm mt-2 opacity-80  text-primary leading-relaxed">
              Your trusted platform for finding affordable student hostels across Pakistan. Safe, secure, and
              student-friendly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80 text-primary">
              <li>
                <Link href="/hostels" className="hover:opacity-100 hover:text-foreground hover:underline transition-opacity">
                  Browse Hostels
                </Link>
              </li>
              <li>
                <Link href="/cities" className="hover:opacity-100 hover:text-foreground hover:underline transition-opacity">
                  Cities
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:opacity-100 hover:text-foreground hover:underline transition-opacity">
                  FAQ
                </Link>
              </li>
            
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Support</h4>
            <ul className="space-y-2 text-sm opacity-80 text-primary">
              <li>
                <Link href="/contact" className="hover:opacity-100 hover:text-foreground hover:underline transition-opacity">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:opacity-100 hover:text-foreground hover:underline transition-opacity">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:opacity-100 hover:text-foreground hover:underline transition-opacity">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:opacity-100 hover:text-foreground hover:underline transition-opacity">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Connect With Us</h4>
            <div className="flex gap-4 mb-4 text-primary">
              <Link href="#" target="_blank"  className="hover:opacity-80 transition-opacity">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com/hostel_hub.pk" target="_blank"  className="hover:opacity-80 transition-opacity">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="https://x.com/hostelhub_pk" target="_blank" className="hover:opacity-80 transition-opacity">
                <Twitter className="w-5 h-5" />
              </Link>
               
            </div>
            <p className="text-sm text-primary opacity-80">
              <strong>Email:</strong> info@hostelhub.pk
            </p>
            <p className="text-sm text-primary opacity-80">
              <strong>Phone:</strong> +923051767579
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid text-primary grid-cols-1 sm:grid-cols-2 gap-4 text-sm opacity-80">
            <p>&copy; 2025 HostelHub. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
export default Footer
