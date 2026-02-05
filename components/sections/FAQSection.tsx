import Image from "next/image"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "How quickly can I get started?",
    answer: "Enrollment takes just 5 minutes online. You'll have immediate access to our platform and product catalog.",
  },
  {
    question: "Do you require contracts?",
    answer: "No contracts or long-term commitments required. Order what you need, when you need it.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, ACH transfers, and can set up net payment terms for qualified practices.",
  },
  {
    question: "How fast is delivery?",
    answer: "Most orders ship same-day with next-day delivery available. Temperature-controlled shipping for sensitive products.",
  },
]

export function FAQSection() {
  return (
    <section className="bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Title and Image */}
          <div>
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Quick answers to common questions about our platform and services
            </p>

            {/* Decorative Image */}
            <div className="hidden lg:block relative">
              <div className="bg-gradient-to-br from-primary-light to-secondary rounded-2xl p-8 aspect-[4/3]">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <HelpCircle className="h-10 w-10 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">Still have questions?</p>
                    <p className="text-sm text-muted-foreground">Contact our support team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-secondary rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Contact CTA */}
            <div className="mt-8 p-6 bg-primary-light rounded-xl">
              <p className="text-foreground font-medium mb-1">Can't find what you're looking for?</p>
              <p className="text-sm text-muted-foreground">
                Our support team is available Monday - Friday, 8:00 AM - 6:00 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
