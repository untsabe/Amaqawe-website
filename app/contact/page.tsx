"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const cardGradient =
  "bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-transform duration-300"


  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Get in touch with us for quotes, partnerships, or any inquiries
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We're here to help! Whether you're interested in our services, looking for partnership opportunities, or
                have any questions, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                <Card className={`border-border overflow-hidden ${cardGradient}`}>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-1">Phone</h3>
                        <a
                          href="tel:0659659018"
                          className="text-black/80 hover:text-black transition-colors"
                        >
                          (065) 965 9018
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`border-border overflow-hidden ${cardGradient}`}>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-2">Email</h3>
                        <div className="space-y-1">
                          <a
                            href="mailto:info@amaghawegroup.co.za"
                            className="block text-black/80 hover:text-black transition-colors"
                          >
                            info@amaqhawegroup.co.za
                          </a>
                          <a
                            href="mailto:amos.msiza@amaghawegroup.co.za"
                            className="block text-black/80 hover:text-black transition-colors"
                          >
                            amos.msiza@amaqhawegroup.co.za
                          </a>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className={`border-border overflow-hidden ${cardGradient}`}>
                  <CardContent className="p-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-black/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-black mb-1">Service Area</h3>
                        <p className="text-black/80">
                          Nkangala District
                          <br />
                          Mpumalanga, South Africa
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className={`mt-8 p-6 rounded-lg ${cardGradient}`}>
                <h3 className="text-lg font-bold text-black mb-2">Business Hours</h3>
                <p className="text-black/80">
                  Monday - Friday: 8:00 AM - 5:00 PM
                  <br />
                  Saturday: 9:00 AM - 1:00 PM
                  <br />
                  Sunday: Closed
                </p>
                <p className="text-sm text-black/70 mt-3">
                  24/7 technical support available for existing customers
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className={`border-border overflow-hidden ${cardGradient}`}>
                <CardContent className="p-8 relative z-10">
                  <h2 className="text-2xl font-bold text-black mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What is this regarding?"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className={`w-full ${cardGradient} text-black font-semibold`}
                    >
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Coverage Area</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We proudly serve the Nkangala District and surrounding areas in Mpumalanga, covering over 20
              villages and communities.
            </p>
            <div className={`rounded-lg p-8 border border-border ${cardGradient}`}>
              <div className="aspect-video rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-black mx-auto mb-4" />
                  <p className="text-lg font-semibold text-black">Nkangala District</p>
                  <p className="text-black/80">Mpumalanga Province, South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
