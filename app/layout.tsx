import type { Metadata, Viewport } from "next";
import "./globals.css";
import ResponsiveNav from "../components/ResponsiveNav";

export const metadata: Metadata = {
  title: "Treasure Coast Scavengers - Adventure that Brings a Community Together",
  description: "We create free, family-friendly scavenger hunts across Florida's Treasure Coast—connecting neighbors, exploring local gems, and giving back.",
  keywords: "scavenger hunt, treasure coast, florida, community, nonprofit, family fun",
  authors: [{ name: "Treasure Coast Scavengers" }],
  icons: {
    icon: '/images/TCS_new_logo.png',
    shortcut: '/images/TCS_new_logo.png',
    apple: '/images/TCS_new_logo.png',
  },
  openGraph: {
    title: "Treasure Coast Scavengers",
    description: "Adventure that Brings a Community Together",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treasure Coast Scavengers",
    description: "Adventure that Brings a Community Together",
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
