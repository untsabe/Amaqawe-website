"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Handshake, Building2, TrendingUp, Users, Target, CheckCircle, ArrowRight } from "lucide-react"

export default function PartnershipsPage() {
  const targetAgencies = [
    {
      name: "Small Enterprise Development Agency (SEDA)",
      description: "Supporting small business growth and development",
    },
    {
      name: "Department of Trade, Industry, and Competition (DTIC)",
      description: "Promoting industrial development and competitiveness",
    },
    {
      name: "Mpumalanga Premier's Office",
      description: "Provincial government support and development initiatives",
    },
    {
      name: "Mpumalanga Economic Growth Agency",
      description: "Driving economic growth and job creation in the province",
    },
    {
      name: "Universal Service and Access Fund (USAF)",
      description: "Funding telecommunications infrastructure in underserved areas",
    },
    {
      name: "Other Development Agencies",
      description: "Various government and private sector development partners",
    },
  ]

  const currentPartnerships = [
    {
      name: "Uyinjabulo Suppliers - Open Serve Fiber",
      description:
        "Strategic partnership for fiber optic infrastructure deployment, enabling us to provide high-speed fiber internet to more communities.",
    },
    {
      name: "PBICT (Progressive Blacks in ICT)",
      description: "Member organization supporting transformation and empowerment in the ICT sector.",
    },
    {
      name: "NAFCOC (National African Federated Chamber of Commerce)",
      description: "Member organization promoting African business development and economic empowerment.",
    },
  ]

  const partnershipBenefits = [
    {
      icon: TrendingUp,
      title: "Accelerated Growth",
      description: "Scale our operations to reach more communities faster",
    },
    {
      icon: Users,
      title: "Greater Impact",
      description: "Expand our community empowerment programs",
    },
    {
      icon: Building2,
      title: "Infrastructure Development",
      description: "Build more robust and extensive network infrastructure",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Invest in cutting-edge technologies and solutions",
    },
  ]

  const whyPartner = [
    "Proven track record as the largest ISP in our region",
    "100% Black-owned and BBBEE certified",
    "Strong community focus and local knowledge",
    "Experienced management team",
    "Innovative approach to connectivity challenges",
    "Commitment to sustainable growth and job creation",
    "Established partnerships with industry leaders",
    "Clear vision for digital transformation",
  ]

  const cardGradient =
    "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 hover:from-yellow-400 hover:to-yellow-200 transition-all duration-300"

  const agencyIcons = [Handshake, Users, Building2, TrendingUp, Target, CheckCircle]

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
              <Handshake className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Partnership & Funding Opportunities</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Join us in bridging the digital divide and empowering South African communities
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Seeking Strategic Partnerships
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Amaqhawe Group Network is actively seeking partnerships and funding opportunities to accelerate our growth
              and expand our community impact. As the largest ISP in the Thembsile Hani Municipality area, we have
              demonstrated our ability to deliver reliable connectivity solutions to underserved communities.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              With the right partnerships and funding support, we can scale our operations to reach even more
              communities, create additional employment opportunities, and contribute significantly to South Africa's
              digital transformation goals.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are particularly interested in partnerships that align with our mission of bridging the digital divide
              and empowering communities through innovative connectivity solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Target Agencies */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Target Funding Agencies</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We are reaching out to the following agencies for partnership and funding opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {targetAgencies.map((agency, index) => {
              const Icon = agencyIcons[index % agencyIcons.length]
              return (
                <Card key={index} className={`border-border overflow-hidden ${cardGradient}`}>
                  <CardContent className="p-6 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                      <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{agency.name}</h3>
                    <p className="text-white/90 leading-relaxed">{agency.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Current Partnerships */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Current Partnerships</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These are our existing partnerships that support our mission
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {currentPartnerships.map((partner, index) => {
              const Icon = agencyIcons[index % agencyIcons.length]
              return (
                <Card key={index} className={`border-border overflow-hidden ${cardGradient}`}>
                  <CardContent className="p-6 relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center mb-4 group-hover:bg-white transition-colors">
                      <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-2">{partner.name}</h3>
                    <p className="text-white/90 leading-relaxed">{partner.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Partnerships Enable</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic partnerships and funding will help us achieve these key objectives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {partnershipBenefits.map((benefit, index) => (
              <Card key={index} className={`border-border text-center overflow-hidden ${cardGradient}`}>
                <CardContent className="p-6 relative z-10">
                  <div className="w-14 h-14 rounded-lg bg-black/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white transition-colors">
                    <benefit.icon className="w-7 h-7 text-white group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-black mb-2">{benefit.title}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Partner with Amaqhawe Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyPartner.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <p className="text-lg text-primary-foreground/90">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Let's Build the Future Together</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              If you're a funding agency, potential partner, or investor interested in supporting digital transformation
              in South African communities, we'd love to hear from you.
            </p>
            <Button
              asChild
              size="lg"
              className={`w-full ${cardGradient} text-black font-semibold flex items-center justify-center`}
            >
              <Link href="/contact">
                Get in Touch <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}


