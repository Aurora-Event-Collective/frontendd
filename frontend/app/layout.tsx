import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LūmenFest 2026",
  description: "Don't spend Tết scrolling Netflix — spend it meeting new people",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon.ico",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "LūmenFest 2026",
    description: "Don't spend Tết scrolling Netflix — spend it meeting new people",
    url: "https://www.taimzeventcollective.com/",
    siteName: "LūmenFest",
    images: [
      {
        url: "https://www.taimzeventcollective.com/Word Logo.png",
        width: 1200,
        height: 630,
        alt: "LūmenFest 2026 Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "LūmenFest 2026",
    description: "Don't spend Tết scrolling Netflix — spend it meeting new people",
    images: ["https://www.taimzeventcollective.com/Word Logo.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.taimzeventcollective.com/"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "LūmenFest",
        "url": siteUrl,
        "logo": `${siteUrl}/favicon.ico`
      },
      {
        "@type": "WebSite",
        "url": siteUrl,
        "name": "LūmenFest 2026",
        "description": "Don't spend Tết scrolling Netflix — spend it meeting new people"
      }
    ]
  }

  return (
    <html lang="en">
      <head>
        {/* Google Analytics Tag */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8GZP7WME9B"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8GZP7WME9B');
            `,
          }}
        />
        
        <script
          key="ldjson"
          type="application/ld+json"
          // JSON-LD inserted as text to avoid React escaping
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}