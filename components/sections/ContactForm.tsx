"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
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
import { Send, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"

const practiceTypes = [
  "Solo Practice",
  "Small Practice (2-5 providers)",
  "Multi-location Practice",
  "Hospital / Health System",
  "Mobile Wound Care",
  "Long-term Care Facility",
  "Other",
]

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = React.useState(false)
  const [serverError, setServerError] = React.useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      practiceName: "",
      practiceType: "",
      message: "",
    },
  })

  const practiceType = watch("practiceType")

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Something went wrong")
      }

      setIsSubmitted(true)
      reset()
    } catch (error) {
      setServerError(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      )
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2">Message Sent!</h3>
        <p className="text-muted-foreground mb-6 text-sm">
          We'll respond within 4 business hours.
        </p>
        <Button variant="outline" onClick={() => setIsSubmitted(false)}>
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-1">Send a Message</h2>
        <p className="text-sm text-muted-foreground">Fill out the form and we'll get back to you shortly.</p>
      </div>

      {serverError && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2">
          <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-700">{serverError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="firstName" className="text-xs">First Name *</Label>
            <Input
              id="firstName"
              placeholder="Jane"
              className={`h-10 ${errors.firstName ? "border-red-500" : ""}`}
              {...register("firstName")}
            />
            {errors.firstName && (
              <p className="text-xs text-red-600">{errors.firstName.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="lastName" className="text-xs">Last Name *</Label>
            <Input
              id="lastName"
              placeholder="Smith"
              className={`h-10 ${errors.lastName ? "border-red-500" : ""}`}
              {...register("lastName")}
            />
            {errors.lastName && (
              <p className="text-xs text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <Label htmlFor="email" className="text-xs">Email Address *</Label>
          <Input
            id="email"
            type="email"
            placeholder="doctor@practice.com"
            className={`h-10 ${errors.email ? "border-red-500" : ""}`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Practice Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="space-y-1">
            <Label htmlFor="practiceName" className="text-xs">Practice Name *</Label>
            <Input
              id="practiceName"
              placeholder="Your Practice"
              className={`h-10 ${errors.practiceName ? "border-red-500" : ""}`}
              {...register("practiceName")}
            />
            {errors.practiceName && (
              <p className="text-xs text-red-600">{errors.practiceName.message}</p>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="practiceType" className="text-xs">Practice Type *</Label>
            <Select
              value={practiceType}
              onValueChange={(value) => setValue("practiceType", value, { shouldValidate: true })}
            >
              <SelectTrigger className={`h-10 ${errors.practiceType ? "border-red-500" : ""}`}>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                {practiceTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.practiceType && (
              <p className="text-xs text-red-600">{errors.practiceType.message}</p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <Label htmlFor="phone" className="text-xs">Phone Number (Optional)</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            className={`h-10 ${errors.phone ? "border-red-500" : ""}`}
            {...register("phone")}
          />
          {errors.phone && (
            <p className="text-xs text-red-600">{errors.phone.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-1">
          <Label htmlFor="message" className="text-xs">Message *</Label>
          <Textarea
            id="message"
            placeholder="Tell us about your wound care needs..."
            rows={3}
            className={`resize-none ${errors.message ? "border-red-500" : ""}`}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs text-red-600">{errors.message.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
