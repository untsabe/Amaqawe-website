import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, Shield, Network, MapPin, Users, Zap } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Wifi,
      title: "Internet Services",
      description: "Fiber, Wireless, Mobile, Hotspot, and Mesh Network solutions for reliable connectivity.",
    },
    {
      icon: Shield,
      title: "Security Systems",
      description: "Advanced surveillance systems and smart home IoT services for complete protection.",
    },
    {
      icon: Network,
      title: "Network Solutions",
      description: "Multi-solution networks, mesh networks, and high-site coverage for seamless connectivity.",
    },
  ]

  const villages = [
    "Tweefontein",
    "Verena",
    "Kwaggafontein",
    "Moloto",
    "Ekangala",
    "Rethabiseng",
    "Mandela View",
    "Siyabuswa",
    "Mabusabesala",
    "Phola",
    "Ogies",
    "Delmas",
    "Bronkhorstspruit",
    "Cullinan",
    "Rayton",
    "Ekangala Extension",
    "Kameelrivier",
    "Vlaakfontein",
    "Zithobeni",
    "Marapyane",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src="/african-community-connectivity-technology-network-.jpg" alt="Community connectivity" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <h1
              className="text-4xl md:text-6xl font-bold mb-6 text-balance 
                        bg-gradient-to-r from-yellow-500 via-yellow-300 to-yellow-500 
                        bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_5s_linear_infinite]"
            >
              Empowering Communities through Connectivity
            </h1>
         <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto text-pretty">
            100% Black-owned, BBBEE-certified provider of internet and security solutions bridging the digital divide
          </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 
                      text-black font-semibold hover:brightness-105 transition-all"
          >
            <Link href="/contact">Get Connected Today</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 
                      text-black font-semibold border border-yellow-400 
                      hover:brightness-105 transition-all"
          >
            <Link href="/services">View Our Services</Link>
          </Button>
        </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Leading the Digital Revolution in Rural South Africa
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Amaqhawe Group Network is the largest ISP in the Thembsile Hani Municipality area, providing cutting-edge
              internet and security solutions to over 20 villages and communities. We're committed to bridging the
              digital divide and empowering communities through reliable, affordable connectivity.
            </p>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive connectivity and security solutions tailored for communities and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                    key={index}
                    className="border-none rounded-2xl shadow-lg bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 transition-all duration-500"
                  >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
              Serving the Thembsile Hani Municipality and surrounding areas
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {villages.map((village, index) => (
               <div
                    key={index}
                    className="rounded-lg p-4 text-center text-black font-medium 
                              bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600 
                              hover:from-yellow-400 hover:to-yellow-500 transition-all duration-500 shadow-md"
                  >
                <p className="text-sm">{village}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Amaqhawe Group?</h2>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Our commitment to excellence and community empowerment sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">100% Black-owned</h3>
              <p className="text-sm text-primary-foreground/80">BBBEE Certified</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Experienced Team</h3>
              <p className="text-sm text-primary-foreground/80">Industry experts</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Community Focus</h3>
              <p className="text-sm text-primary-foreground/80">Local empowerment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                <Network className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-bold mb-2">Cutting-edge Tech</h3>
              <p className="text-sm text-primary-foreground/80">Latest innovations</p>
            </div>
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
