"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, CheckCircle2, MessageSquare } from "lucide-react"

const practiceTypes = [
  "Solo Practice",
  "Small Practice (2-5 providers)",
  "Multi-location Practice",
  "Hospital / Health System",
  "Mobile Wound Care",
  "Long-term Care Facility",
  "Other",
]

const inquiryTypes = [
  "Product Inquiry",
  "Platform Demo Request",
  "Pricing Information",
  "Compliance Support",
  "Technical Support",
  "Partnership Opportunity",
  "Other",
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto text-center py-16">
        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-3">Message Sent Successfully</h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Thank you for reaching out. Our team will respond within 4 hours during business hours.
        </p>
        <Button size="lg" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-5 gap-12">
        {/* Left Column - Info */}
        <div className="lg:col-span-2">
          <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
            Contact Form
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Send us a Message
          </h2>
          <p className="text-muted-foreground mb-8">
            Tell us about your practice and how we can help streamline your wound care delivery
          </p>

          {/* Decorative Element */}
          <div className="hidden lg:block">
            <div className="bg-gradient-to-br from-primary-light to-secondary rounded-2xl p-8">
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <MessageSquare className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">We respond fast</p>
                  <p className="text-sm text-muted-foreground">Within 4 business hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name and Title */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Dr. Jane Smith"
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Title / Role</Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Wound Care Specialist"
                    className="h-11"
                  />
                </div>
              </div>

              {/* Practice and Type */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="practice">Practice Name</Label>
                  <Input
                    id="practice"
                    name="practice"
                    placeholder="Austin Wound Care Center"
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="practiceType">Practice Type</Label>
                  <Select name="practiceType">
                    <SelectTrigger className="h-11">
                      <SelectValue placeholder="Select practice type" />
                    </SelectTrigger>
                    <SelectContent>
                      {practiceTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Email and Phone */}
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="doctor@practice.com"
                    required
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="h-11"
                  />
                </div>
              </div>

              {/* Inquiry Type */}
              <div className="space-y-2">
                <Label htmlFor="inquiryType">How can we help?</Label>
                <Select name="inquiryType" required>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {inquiryTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your current wound care challenges and how we can help streamline your practice..."
                  rows={4}
                  required
                  className="resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full text-base" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs text-muted-foreground">
                We typically respond within 4 business hours. For urgent matters, please call us directly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
