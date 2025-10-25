"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/impact", label: "Our Impact" },
  { href: "/gallery", label: "Gallery" },  // 🆕 Added Gallery link
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" },
]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center h-16 space-y-2 md:space-y-0 md:flex-row md:gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-5">
            <Image
              src="/logo.png"
              alt="Amaqhawe Group Logo"
              width={50}
              height={50}
              priority
              className="rounded-full"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer hover:from-yellow-300 hover:via-yellow-100 hover:to-yellow-300 transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold hover:from-yellow-400 hover:to-yellow-200 transition-all duration-300"
            >
              <Link href="/contact">Get Connected</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="absolute right-4 md:hidden text-yellow-400"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border text-center bg-black">
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer hover:from-yellow-300 hover:via-yellow-100 hover:to-yellow-300 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                asChild
                className="bg-gradient-to-r from-yellow-500 to-yellow-300 text-black font-semibold hover:from-yellow-400 hover:to-yellow-200 transition-all duration-300 w-3/4"
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get Connected
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
