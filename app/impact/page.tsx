"use client"

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Briefcase, Users, TrendingUp, GraduationCap, Heart, Lightbulb, Globe } from "lucide-react"

export default function ImpactPage() {
  const cardGradient =
    "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 hover:from-yellow-400 hover:to-yellow-200 transition-all duration-300"

  const impacts = [
    {
      icon: BookOpen,
      title: "Access to Information & Education",
      description:
        "Enabling students and lifelong learners to access online educational resources, courses, and research materials.",
      stats: "Thousands of students connected",
    },
    {
      icon: Briefcase,
      title: "Economic Opportunities",
      description: "Opening doors to remote work, e-commerce, and digital entrepreneurship for community members.",
      stats: "Supporting local businesses",
    },
    {
      icon: Users,
      title: "Social Connectivity",
      description: "Keeping families and friends connected through video calls, social media, and messaging platforms.",
      stats: "20+ communities connected",
    },
    {
      icon: TrendingUp,
      title: "Local Economic Growth",
      description: "Stimulating economic activity through improved business operations and access to digital markets.",
      stats: "Growing local economy",
    },
    {
      icon: GraduationCap,
      title: "Digital Literacy",
      description: "Fostering digital skills and knowledge essential for participation in the modern economy.",
      stats: "Empowering communities",
    },
    {
      icon: Heart,
      title: "Healthcare Access",
      description: "Enabling telemedicine and access to health information for better community health outcomes.",
      stats: "Improving healthcare access",
    },
  ]

  const stories = [
    {
      title: "Free Community Hotspots",
      description:
        "We provide 1 hour of free daily connectivity at strategic community locations, ensuring that even those who cannot afford home internet can stay connected.",
      icon: Globe,
    },
    {
      title: "Job Creation",
      description:
        "As we expand our network, we create employment opportunities for local technicians, customer service representatives, and network engineers.",
      icon: Briefcase,
    },
    {
      title: "Educational Support",
      description:
        "Partnering with schools and educational institutions to provide affordable connectivity for students and teachers.",
      icon: GraduationCap,
    },
    {
      title: "Innovation Hub",
      description:
        "Supporting local entrepreneurs and startups with reliable connectivity to build and scale their digital businesses.",
      icon: Lightbulb,
    },
  ]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Community Impact</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Transforming lives and empowering communities through digital connectivity
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Bridging the Digital Divide</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              At Amaqhawe Group Network, we believe that internet access is not a luxury—it's a fundamental right that
              opens doors to education, economic opportunity, and social connection. Our work goes beyond simply
              providing internet services; we're building the digital infrastructure that enables communities to thrive
              in the 21st century.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every connection we make represents a family that can access online education, a business that can reach
              new markets, and a community that can participate fully in the digital economy.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We're Making a Difference</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our connectivity solutions create ripple effects across multiple aspects of community life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {impacts.map((impact, index) => (
              <Card key={index} className={`border-border overflow-hidden ${cardGradient}`}>
                <CardContent className="p-6 relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <impact.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-2">{impact.title}</h3>
                  <p className="text-white/90 leading-relaxed mb-3">{impact.description}</p>
                  <p className="text-sm font-semibold text-white">{impact.stats}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Community Initiatives</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Going beyond connectivity to create lasting positive change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {stories.map((story, index) => (
              <Card key={index} className={`border-border overflow-hidden ${cardGradient}`}>
                <CardContent className="p-8 relative z-10">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                    <story.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-3">{story.title}</h3>
                  <p className="text-white/90 leading-relaxed">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      
     

      {/* Vision */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Vision for the Future</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a South Africa where every community, regardless of location, has access to world-class
              digital infrastructure. Where students can access the same educational resources as their urban
              counterparts. Where entrepreneurs can build global businesses from rural villages. Where families stay
              connected across any distance. This is the future we're building, one connection at a time.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
