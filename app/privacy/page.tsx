import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Appleseed Medical",
  description:
    "How Appleseed Medical collects, uses, and protects information submitted through our website.",
}

export default function PrivacyPage() {
  return (
    <article className="container mx-auto max-w-3xl py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
        Privacy Policy
      </h1>
      <p className="text-sm text-muted-foreground mb-10">
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="prose prose-slate max-w-none space-y-6 text-foreground">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Information we collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you submit our contact form, we collect the name, email address, phone number,
            practice name, practice type, and message you provide. We do not collect health
            information from patients through this site. Appleseed Medical is a B2B medical-supply
            distributor and this website is not a covered HIPAA service.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">How we use it</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use submitted contact information solely to respond to your inquiry, fulfill orders,
            and follow up about wound-care supply needs. We do not sell or share contact data with
            third parties for marketing.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Cookies and analytics</h2>
          <p className="text-muted-foreground leading-relaxed">
            This site does not currently use third-party advertising cookies. Essential cookies
            may be used to keep the site functional.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Questions about this policy can be sent to{" "}
            <a href="mailto:support@appleseedmedical.com" className="text-primary underline">
              support@appleseedmedical.com
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  )
}
