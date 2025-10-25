"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Shield, Network, MapPin } from "lucide-react"
import { motion, useMotionValue, animate } from "framer-motion"
import React, { useEffect, useRef, useState } from "react"

export default function HomePage() {
  // Counter Component (resets and animates every time in view)
  function Counter({ from = 0, to, duration = 2, trigger }: { from?: number; to: number; duration?: number; trigger: boolean }) {
    const motionVal = useMotionValue(from)
    const [value, setValue] = useState(from)

    useEffect(() => {
      if (!trigger) return
      setValue(from) // Reset to start value each time
      const controls = animate(motionVal, to, {
        duration,
        ease: "easeOut",
        onUpdate: (v) => setValue(Math.floor(v)),
      })
      return () => controls.stop()
    }, [trigger, to, duration, motionVal, from])

    return <span>{value.toLocaleString()}</span>
  }

  //  Track if Impact section is in view
  const [inView, setInView] = useState(false)
  const impactRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        setInView(entry.isIntersecting) // true when visible, false when not
      },
      { threshold: 0.4 }
    )
    if (impactRef.current) observer.observe(impactRef.current)
    return () => observer.disconnect()
  }, [])

  const villages = [
    "Tweefontein", "Verena", "Kwaggafontein", "Moloto", "Ekangala", "Rethabiseng", "Mandela View",
    "Siyabuswa", "Mabusabesala", "Phola", "Ogies", "Delmas", "Bronkhorstspruit", "Cullinan",
    "Rayton", "Ekangala Extension", "Kameelrivier", "Vlaakfontein", "Zithobeni", "Marapyane",
  ]

  return (
<main className="min-h-screen">
  <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">

    {/* Background Layer */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Darkened gradient backdrop for better contrast */}
      <div className="absolute inset-0 bg-[linear-gradient(120deg,#0d0d1a,#12132a,#f6e05e/20,#facc15/20,#0d0d1a)]" />

      {/* Floating SVG objects - darker */}
      <svg className="absolute top-[15%] left-[25%] w-20 h-20 text-yellow-500/30 animate-float-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20v-6m0 0a6 6 0 1 0-6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

      <svg className="absolute top-[60%] left-[70%] w-24 h-24 text-yellow-600/30 animate-float-medium" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="8" />
        <path d="M8 12h8" />
      </svg>


      {/* Interactive floating objects */}
      

      <svg className="absolute top-[70%] right-[20%] w-24 h-24 text-yellow-600/30 animate-float-interact" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8z" />
      </svg>

      {/* New interactive objects */}
      <svg className="absolute top-[20%] right-[25%] w-16 h-16 text-yellow-500/30 animate-float-interact" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 1-10 10 10 10 0 0 1 10-10z" />
      </svg>

      <svg className="absolute top-[55%] left-[10%] w-20 h-20 text-yellow-600/30 animate-float-interact" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="4" />
      </svg>

    \

      <svg className="absolute top-[75%] left-[45%] w-20 h-20 text-yellow-500/30 animate-float-interact" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12h16M12 4v16" />
      </svg>

      <svg className="absolute top-[10%] left-[60%] w-16 h-16 text-yellow-600/30 animate-float-interact" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
      </svg>

      <svg className="absolute top-[25%] left-[15%] w-20 h-20 text-yellow-600/30 animate-float-interact" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 12.55a11 11 0 0 1 14 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {/* CPU icons */}
     

      <svg className="absolute top-[65%] right-[35%] w-20 h-20 text-yellow-500/30 animate-float-interact" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {/* Security / shield icon */}
      <svg className="absolute top-[20%] right-[25%] w-20 h-20 text-yellow-600/30 animate-float-interact" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l7 4v6c0 5-3 9-7 10-4-1-7-5-7-10V6l7-4z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 11v4" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="17" r="1" fill="currentColor"/>
      </svg>
     

{/* CPU icon */}
<svg className="absolute bottom-[15%] left-[25%] w-20 h-20 text-yellow-500/30 animate-float-bottom-medium" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
  <rect x="7" y="7" width="10" height="10" rx="2" />
  <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent mix-blend-soft-light pointer-events-none" />
    </div>

    {/* Hero Content */}
    <div className="container mx-auto px-4 z-10 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
        Empowering Communities through Connectivity
      </h1>
      <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-pretty">
        Providing reliable, affordable internet and security solutions while bridging the digital divide in every community we serve.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild size="lg" className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-black font-semibold hover:brightness-105 transition-all">
          <Link href="/contact">Get Connected Today</Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-black font-semibold border border-yellow-400 hover:brightness-105 transition-all">
          <Link href="/services">View Our Services</Link>
        </Button>
      </div>
    </div>
  </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Leading the Digital Revolution in Rural South Africa</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Amaqhawe Group Network is the largest ISP in the Nkangala District, providing cutting-edge
              internet and security solutions to over 20 villages and communities. We're committed to bridging the
              digital divide and empowering communities through reliable, affordable connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services (Image-based like Network Solutions) */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <Wifi className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive connectivity and security solutions tailored for communities and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Wifi,
                title: "Internet Services",
                description: "Fiber, Wireless, Mobile, Hotspot, and Mesh Network solutions for reliable connectivity.",
                bgImage: "https://media.istockphoto.com/id/1493094820/photo/wifi-symbol-internet-connection-business-global-communication-mobile-network-5g-mobile-phone.webp?b=1&s=170667a&w=0&k=20&c=gTKy8tm1p58s67Nama-hcHoYEJsVK-99n3Tlks-xwoM=",
              },
              {
                icon: Shield,
                title: "Security Systems",
                description: "Advanced surveillance systems and smart home IoT services for complete protection.",
                bgImage: "https://th.bing.com/th/id/OIP.E2hjelrYzSH2GrLVXFy8OwHaE8?w=233&h=180&c=7&r=0&o=7&cb=12&pid=1.7&rm=3",
              },
              {
                icon: Network,
                title: "Network Solutions",
                description: "Multi-solution networks, mesh networks, and high-site coverage for seamless connectivity.",
                bgImage: "https://itworksdubai.com/wp-content/uploads/2023/11/Network-Solution.jpg",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-none rounded-2xl shadow-lg bg-gold-gradient hover-gold-gradient transition-all duration-500 group overflow-hidden"
              >
                <div
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>

                <CardContent className="p-6 relative z-10 text-white">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-card-foreground mb-2">{service.title}</h3>
                  <p className="text-white/80 leading-relaxed text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
              <div className="text-center mt-12">
      <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
        <Link href="/services">Explore All Services</Link>
      </Button>
    </div>

        </div>
      </section>

      {/* Coverage Area */}
<section className="py-16 bg-background">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full mb-4">
        <MapPin size={20} />
        <span className="text-sm font-semibold">20+ Communities Served</span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Coverage Area</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Serving the Nkangala District and Surrounding Areas
      </p>
    </div>

    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {villages.map((village, index) => (
          <div
            key={index}
            className="rounded-lg p-4 text-center text-black font-medium bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-transform duration-300 shadow-md"
          >
            <p className="text-sm">{village}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Animated Impact Section */}
      <section ref={impactRef} className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { label: "Communities Served", value: 20, suffix: "+" },
              { label: "Households Connected", value: 1000, suffix: "+" },
              { label: "ISP in Our Region", value: 1, prefix: "#" },
              { label: "Support Available", value: 24, suffix: "/7" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-accent mb-2">
                  {item.prefix}
                  <Counter to={item.value} trigger={inView} />
                  {item.suffix}
                </div>
                <p className="text-lg text-primary-foreground/80">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to Get Connected?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of households and businesses already enjoying reliable connectivity. Contact us today for a
              free quote or to discuss partnership opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 
                          text-black font-semibold hover:from-yellow-400 hover:to-yellow-200 
                          transition-all duration-300"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 
                          text-black font-semibold border border-yellow-400 
                          hover:from-yellow-400 hover:to-yellow-200 transition-all duration-300"
              >
                <Link href="/partnerships">Partnership Opportunities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

