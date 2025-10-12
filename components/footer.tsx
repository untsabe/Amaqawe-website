import Link from "next/link"
import { Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Amaqhawe Group</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Trading as Msiza Empire (Pty) Ltd. Empowering communities through connectivity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Impact
                </Link>
              </li>
              <li>
                <Link
                  href="/partnerships"
                  className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Internet Services</li>
              <li className="text-sm text-primary-foreground/80">Security Systems</li>
              <li className="text-sm text-primary-foreground/80">Network Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/80">
                <Phone size={16} />
                <span>(065) 965 9018</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-primary-foreground/80">
                <Mail size={16} className="mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@amaghawegroup.co.za" className="hover:text-accent transition-colors">
                    info@amaqhawegroup.co.za
                  </a>
                  <a href="mailto:amos.msiza@amaghawegroup.co.za" className="hover:text-accent transition-colors">
                    amos.msiza@amaqhawegroup.co.za
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Amaqhawe Group Network. All rights reserved. | 100% Black-owned & BBBEE
            Certified
          </p>
        </div>
      </div>
    </footer>
  )
}
