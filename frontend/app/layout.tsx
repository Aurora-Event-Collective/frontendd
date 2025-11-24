// app/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

// This is the DEFAULT metadata - used when page-specific metadata isn't provided
export const metadata: Metadata = {
  title: {
    default: "LūmenFest 2026",
    template: "%s | LūmenFest 2026"
  },
  description: "Don't spend Tết scrolling Netflix — spend it meeting new people",
  metadataBase: new URL("https://www.taimzeventcollective.com"),
  openGraph: {
    type: "website",
    siteName: "LūmenFest",
    images: [
      {
        url: "/Word Logo.png",
        width: 1200,
        height: 630,
        alt: "LūmenFest 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.className} ${geistMono.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}