import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mindbridge | Professional Counselling Services",
  description: "Mindbridge offers professional counselling services in Brisbane, specializing in anxiety, depression, and personal growth. Book your session with Adi today.",
  keywords: ["counselling", "therapy", "mental health", "Brisbane", "Stones Corner", "psychologist"],
  authors: [{ name: "Adi" }],
  openGraph: {
    title: "Mindbridge Counselling Services",
    description: "Professional counselling services in Brisbane",
    url: "https://mindbridge.com.au",
    siteName: "Mindbridge",
    locale: "en-AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Safe Haven Therapy",
              "image": "[Your Logo URL]",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "417 Logan Road",
                "addressLocality": "Stones Corner",
                "addressRegion": "QLD",
                "postalCode": "4120",
                "addressCountry": "AU"
              },
              "priceRange": "$$",
              "telephone": "0468808412",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Friday"],
                  "opens": "09:00",
                  "closes": "18:30"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday"],
                  "opens": "09:00",
                  "closes": "16:30"
                }
              ],
              "medicalSpecialty": [
                "Counselling",
                "Mental Health",
                "Psychological Services"
              ]
            })
          }}
        />
        <script 
          src="https://assets.calendly.com/assets/external/widget.js" 
          async 
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-sage-50 text-slate-700`}
      >
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Mindbridge",
              // ... rest of the schema stays the same ...
            })
          }}
        />
      </body>
    </html>
  );
}
