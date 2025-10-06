import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target, Lightbulb, CheckCircle } from "lucide-react"

export default function AboutPage() {
  const strengths = [
    {
      icon: Users,
      title: "100% Black-owned & BBBEE Certified",
      description: "Proudly South African, committed to transformation and empowerment",
    },
    {
      icon: Award,
      title: "Experienced Team",
      description: "Industry experts with deep knowledge of connectivity solutions",
    },
    {
      icon: Target,
      title: "Strong Community Focus",
      description: "Dedicated to uplifting and empowering local communities",
    },
    {
      icon: Lightbulb,
      title: "Innovative Technology",
      description: "Cutting-edge solutions for modern connectivity challenges",
    },
  ]

  const achievements = [
    "Largest ISP in the Thembsile Hani Municipality region",
    "1 hour free daily connectivity at community hotspots",
    "Member of PBICT (Progressive Blacks in ICT)",
    "Member of NAFCOC (National African Federated Chamber of Commerce)",
    "Partnership with Uyinjabulo Suppliers for Open Serve Fiber",
    "Serving 20+ villages and communities",
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Amaqhawe Group Network</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Bridging the digital divide and empowering communities through innovative connectivity solutions
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Founded in 2019 by visionary entrepreneurs Amos and Dineo Msiza, Amaqhawe Group Network (trading as
                Msiza Empire (Pty) Ltd) was born from a simple yet powerful vision: to ensure that every community,
                regardless of location, has access to reliable, affordable internet connectivity.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Starting from humble beginnings, we recognized the critical gap in digital infrastructure across rural
                South African communities. What began as a mission to connect a few villages has grown into the largest
                ISP in the Thembsile Hani Municipality area, serving over 20 communities and thousands of households and
                businesses.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we stand as a testament to what's possible when innovation meets community commitment. As a 100%
                Black-owned and BBBEE-certified company, we're not just providing internet services—we're creating
                opportunities, fostering digital literacy, and building a foundation for economic growth in the
                communities we serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
              <Target className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To bridge the digital divide by providing reliable, affordable, and innovative internet and security
              solutions that empower communities, enable economic growth, and create opportunities for all South
              Africans to participate in the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-16 bg-background">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Key Strengths</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        What makes us the trusted choice for connectivity solutions
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {strengths.map((strength, index) => (
        <Card
          key={index}
          className="border-border hover:border-accent transition-colors overflow-hidden relative
                     bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300
                     hover:from-yellow-400 hover:to-yellow-200 transition-all duration-300"
        >
          <CardContent className="p-8 relative z-10">
            <div className="w-14 h-14 rounded-lg bg-black/20 flex items-center justify-center mb-4">
              <strength.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-black mb-3">{strength.title}</h3>
            <p className="text-white/90 leading-relaxed">{strength.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
      {/* Achievements */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Notable Achievements & Partnerships</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-primary-foreground/90">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Leadership</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Founded by <span className="font-semibold text-foreground">Amos and Dineo Msiza</span>, Amaqhawe Group
              Network is led by a team of passionate professionals committed to making a lasting impact on South African
              communities. Our leadership brings together decades of experience in telecommunications, technology, and
              community development.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a deep understanding of both the technical and social aspects of connectivity, our team works
              tirelessly to ensure that every solution we provide not only meets technical standards but also serves the
              real needs of the communities we serve.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
