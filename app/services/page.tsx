import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Wifi, Radio, Smartphone, MapPin, Network, Shield, Camera, Home, Globe, Layers, Signal } from "lucide-react"

export default function ServicesPage() {
  const internetServices = [
    {
      icon: Wifi,
      title: "Fiber Internet",
      description: "Ultra-fast fiber optic connections.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Radio,
      title: "Wireless Internet",
      description: "Reliable wireless connectivity solutions for areas without fiber infrastructure.",
      bgImage: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Smartphone,
      title: "Mobile Internet",
      description: "Stay connected on the go with our mobile internet packages and data solutions.",
      bgImage: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: MapPin,
      title: "Community Hotspots",
      description: "Free 1-hour daily connectivity at strategic community locations.",
      bgImage: "https://images.unsplash.com/photo-1558618666-fcd25856d4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Network,
      title: "Mesh Networks",
      description: "Advanced mesh network technology for seamless coverage across large areas.",
      bgImage: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
  ]

  const securityServices = [
    {
      icon: Camera,
      title: "Surveillance Systems",
      description: "State-of-the-art CCTV and monitoring systems for homes and businesses.",
      bgImage: "https://images.unsplash.com/photo-1558618666-fcd25856d4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Home,
      title: "Smart Home IoT",
      description: "Integrated smart home solutions for security, automation, and convenience.",
      bgImage: "https://images.unsplash.com/photo-1558618666-fcd25856d4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Shield,
      title: "Security Monitoring",
      description: "24/7 monitoring services to keep your property safe and secure.",
      bgImage: "https://images.unsplash.com/photo-1558618666-fcd25856d4f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
  ]

  const networkSolutions = [
    {
      icon: Globe,
      title: "Multi-solution Networks",
      description: "Comprehensive network infrastructure combining multiple technologies.",
      bgImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Layers,
      title: "Enterprise Networks",
      description: "Scalable network solutions designed for businesses of all sizes.",
      bgImage: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
    {
      icon: Signal,
      title: "High-site Coverage",
      description: "Strategic tower placement for maximum coverage and reliability.",
      bgImage: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80",
    },
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive connectivity and security solutions designed for South African communities
            </p>
          </div>
        </div>
      </section>

      {/* Internet Services */}
      <section className="py-16 bg-background">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
        <Wifi className="w-8 h-8 text-accent" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Internet Services</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Fast, reliable internet connectivity solutions for every need
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {internetServices.map((service, index) => (
        <Card
          key={index}
          className="border-none rounded-2xl shadow-lg bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600
                     hover:from-yellow-400 hover:to-yellow-500 transition-all duration-500 group overflow-hidden"
        >
          <CardContent className="p-6 relative z-10 text-white">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-black">{service.title}</h3> {/* Heading black */}
            <p className="text-sm leading-relaxed">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

{/* Security Systems */}
<section className="py-16 bg-secondary">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
        <Shield className="w-8 h-8 text-accent" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Security Systems</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Advanced security solutions to protect what matters most
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {securityServices.map((service, index) => (
        <Card 
          key={index} 
          className="border-none rounded-2xl shadow-lg bg-gradient-to-br from-yellow-500 via-yellow-400 to-yellow-600
                     hover:from-yellow-400 hover:to-yellow-500 transition-all duration-500 group overflow-hidden"
        >
          <CardContent className="p-6 relative z-10 text-white">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-2 text-black">{service.title}</h3> {/* Heading black */}
            <p className="text-sm leading-relaxed">{service.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>

      {/* Network Solutions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
              <Network className="w-8 h-8 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Network Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade network infrastructure for businesses and communities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {networkSolutions.map((service, index) => (
             <Card
                  key={index}
                  className="border-none rounded-2xl shadow-lg bg-gold-gradient hover-gold-gradient transition-all duration-500 group overflow-hidden"
                >
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${service.bgImage})` }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
      <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
        Contact us today for a free consultation and quote. Our team is ready to help you find the perfect
        connectivity and security solution for your needs.
      </p>
      <Button
        asChild
        size="lg"
        className="bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300
                   text-black font-semibold hover:from-yellow-400 hover:to-yellow-200
                   transition-all duration-300"
      >
        <Link href="/contact">Request a Quote</Link>
      </Button>
    </div>
  </div>
</section>
    </main>
  )
}