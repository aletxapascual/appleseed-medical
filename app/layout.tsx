import type { Metadata } from "next"
import { Source_Sans_3, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Apple Seed Medical | Advanced Wound Care Solutions",
  description: "Your trusted partner for advanced wound care products. Direct access to premium manufacturers with next-day shipping and compliance support.",
  keywords: ["wound care", "medical supplies", "amniotic tissue", "collagen matrix", "healthcare"],
  openGraph: {
    title: "Apple Seed Medical | Advanced Wound Care Solutions",
    description: "Direct access to premium wound care products from leading manufacturers.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sourceSans.variable} ${playfair.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
