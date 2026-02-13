import type { Metadata, Viewport } from "next";
import { Parkinsans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const parkinsans = Parkinsans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-parkinsans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#15c2c1",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.greenvalleypigfarm.com"),

  title: {
    default:
      "Green Valley Pig Farm | Premium Pork & Sustainable Pig Farming",
    template: "%s | Green Valley Pig Farm",
  },

  description:
    "Green Valley Pig Farm specializes in high-quality pork production, sustainable pig farming, breeding excellence, and livestock management. Trusted supplier of healthy pigs and premium pork products.",

  keywords: [
    "Pig Farm",
    "Pork Production",
    "Sustainable Pig Farming",
    "Livestock Farming",
    "Pig Breeding Farm",
    "Organic Pork Supplier",
    "Commercial Pig Farm",
    "Swine Farming",
    "Healthy Pork Products",
    "Agriculture Livestock Farm",
  ],

  authors: [{ name: "Green Valley Pig Farm" }],
  creator: "Green Valley Pig Farm",
  publisher: "Green Valley Pig Farm",

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  applicationName: "Green Valley Pig Farm",
  category: "Agriculture",
  classification: "Pig Farming & Livestock",

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://www.greenvalleypigfarm.com",
  },

  openGraph: {
    title:
      "Green Valley Pig Farm | Premium Pork & Sustainable Pig Farming",
    description:
      "Leading pig farming company providing high-quality pork, ethical breeding practices, and sustainable livestock management.",
    url: "https://www.greenvalleypigfarm.com",
    siteName: "Green Valley Pig Farm",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-pigfarm.jpg",
        width: 1200,
        height: 630,
        alt: "Green Valley Pig Farm - Sustainable Pig Farming",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Green Valley Pig Farm | Sustainable Pork Production",
    description:
      "High-quality pork products and responsible pig farming practices. Trusted livestock supplier.",
    creator: "@greenvalleypigfarm",
    images: ["/images/og-pigfarm.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "geo.position": "40.7128;-74.0060",
    ICBM: "40.7128,-74.0060",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${parkinsans.variable} font-sans antialiased bg-white text-gray-800`}
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
