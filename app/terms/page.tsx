import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Appleseed Medical",
  description:
    "Terms governing use of the Appleseed Medical website and the information and products presented here.",
}

export default function TermsPage() {
  return (
    <article className="container mx-auto max-w-3xl py-16 md:py-24">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Terms of Service</h1>
      <p className="text-sm text-muted-foreground mb-10">
        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
      </p>

      <div className="prose prose-slate max-w-none space-y-6 text-foreground">
        <section>
          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Use of this site</h2>
          <p className="text-muted-foreground leading-relaxed">
            This website is provided for informational purposes about Appleseed Medical&apos;s
            wound-care product portfolio. Product availability, pricing, and reimbursement
            information shown here are subject to change and do not constitute a binding offer.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">No medical advice</h2>
          <p className="text-muted-foreground leading-relaxed">
            Content on this site is intended for licensed healthcare practitioners and is not
            medical advice. Product selection and clinical decisions remain the responsibility of
            the treating clinician.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Trademarks</h2>
          <p className="text-muted-foreground leading-relaxed">
            Manufacturer and product names referenced on this site are the property of their
            respective owners and are used to identify products distributed by Appleseed Medical.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-semibold mt-8 mb-3">Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Questions about these terms can be sent to{" "}
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
